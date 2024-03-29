// // 每隔一段时间，切换英雄的图片，让英雄动起来

// var img = document.querySelector('img');
// var curIndex = 1;
// setInterval(function () {
//     // curIndex++;
//     // if (curIndex === 5) {
//     //     curIndex = 1;
//     // }
//     curIndex = (curIndex % 4) + 1;
//     console.log(curIndex);
//     img.src = './img/' + curIndex + '.png';
// },100);
// // 每隔一段时间，改变英雄的位置，让英雄向右移动
// var x = 0;
// setInterval(function () {
   
    
//          x += 10;
//     img.style.left = x + 'px';
//     if (x > 2000) {
//         x = -100;
    
//     }
   
// }, 100);


// var isDragging = false; // 添加一个开关变量，表示当前是否在拖动
// var deltaX, deltaY; // 按下鼠标时，鼠标位置相对于图片左上角的坐标偏移值

// img.onmousedown = function(e) {
//     isDragging = true; // 鼠标按下时开启拖动开关，并记录当前鼠标位置与图片偏移值
//     deltaX = e.clientX - parseInt(img.style.left);
//     deltaY = e.clientY - parseInt(img.style.top);
// }

// img.onmousemove = function(e) {
//     if (!isDragging) return; // 如果未在拖动，则不进行操作
//     var x = e.clientX - deltaX; // 计算新的图片位置
//     var y = e.clientY - deltaY;
//     if (x > 2000) x = -100; // 如果超出范围则重置
//     img.style.top = y + 'px'; // 更新图片位置
//     img.style.left = x + 'px';
// }

// img.onmouseup = function() {
//     isDragging = false; // 鼠标释放时关闭拖动开关
// }


var img = document.querySelector('img');
var curIndex = 1;
var autoMoveInterval; // 创建一个变量用于存放自动移动的计时器
var x = 0;

// 将自动移动的部分封装为函数
function autoMove() {
    autoMoveInterval = setInterval(function () {
        curIndex = (curIndex % 4) + 1;
        img.src = './img/' + curIndex + '.png';
        if (isDragging === true) {
            x += 0;
        }
        else {
            x += 20;
        img.style.left = x + 'px';
        if (x > 2000) {
            x = -100;
        }
        }
        
    }, 100);
}
autoMove(); // 开始自动移动

var isDragging = false;
var deltaX, deltaY;

img.onmousedown = function(e) {
    isDragging = true; // 拖动开始时停止自动移动
    deltaX = e.clientX - parseInt(img.style.left);
    deltaY = e.clientY - parseInt(img.style.top);
}

window.onmousemove = function(e) {
    if (!isDragging) return;
    var x = e.clientX - deltaX;
    var y = e.clientY - deltaY;
    if (x > 2000) x = -100;
    img.style.top = y + 'px';
    img.style.left = x + 'px';
}
window.onmouseup = function (e) {
    
    isDragging = false;
    x = e.clientX - deltaX;
    y = e.clientY - deltaY;// 更新图片的初始位置
}