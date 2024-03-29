var change=(function () {
  // 完成横幅区的图片切换
  // 横幅区数据
  var datas = [
    {
      img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/15c05b32cf948b594477dfc3eb69fb69.jpg?w=2452&h=920',
      link: 'https://www.mi.com/mi11le-5g-ne',
    },
    {
      img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a532e33470d046b3f044d5ea49fc5e9e.png?thumb=1&w=2452&h=920&f=webp&q=90',
      link: 'https://www.mi.com/xiaomipad5',
    },
    {
      img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918820682e4a490221cfd92b24c14b86.jpg?thumb=1&w=2452&h=920&f=webp&q=90',
      link: 'https://www.mi.com/a/h/22033.html?sign=b60a6ca9167bce2d1ed8ee319cf83c75',
    },
    {
      img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/af7be8f65065f405f57f46a02731f78d.jpg?thumb=1&w=2452&h=920&f=webp&q=90',
      link: 'https://www.mi.com/a/h/22812.html?sign=aab397a7ecf2ae4c1765e9d11fdccca6',
    },
  ];

  function $(selector) {
    return document.querySelector(selector);
  }

  //需要的dom
  var bannerDots = $('.banner-dots');
  var bannerCover= $('.banner-cover');
  var bannerCoverImg = bannerCover.querySelector('img');
  var pointerLeft = $('.banner-pointer-left');
  var pointerRight = $('.banner-pointer-right');
  var banner = $('.banner');
  //初始化
  function init() {
    for (var i = 0; i < datas.length; i++) {
      var span = document.createElement('span');
      span.className = 'fl';
      bannerDots.appendChild(span);
    }
  }
  init();

  // 点击事件
  function change(index) {
    var d = datas[index];
    bannerCover.href = d.link;
    bannerCoverImg.src = d.img;

    // span的选中效果
    //  先移除之前的选中效果
    var selected = bannerDots.querySelector('.banner-dots-selected');
    if (selected) {
      selected.className = 'fl';
    }
    // 让当前的选中效果变为选中效果
    var span=bannerDots.children[index];
    span.className = 'banner-dots-selected fl'
}

  
  var curIndex = 0;
  function toPrev() {
    curIndex--;
    if (curIndex < 0) {
      curIndex = datas.length - 1;
    }
    change(curIndex);
  }

  function toNext() {
    curIndex++;
    if (curIndex >= datas.length) {
      curIndex = 0;
    }
    change(curIndex);
  }
  

  //注册事件
  pointerLeft.onclick = toPrev;
  pointerRight.onclick = toNext;

  // for (let i = 0; i < bannerDots.children.length; i++){
  //   var span = bannerDots.children[i];
  //   span.onclick = function () {
  //     curIndex = i;
  //     change(i);
  //   };
  // }

  for (var i = 0; i < bannerDots.children.length; i++){
    (function (i) {
      var span = bannerDots.children[i];
      span.onclick = function () {
        curIndex = i;
        change(i);
      };
    })(i);
 
  }


  //自动播放
  var timerId;
  function start() {
    if (timerId) {
      return;
    }
    timerId = setInterval(toNext, 6000);
  }

  function stop() {
    clearInterval(timerId);
    timerId = null;
  }
  // 自动播放 
  banner.onmouseenter = stop;
  banner.onmouseleave = start;

})();
