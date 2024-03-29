// 让小球向右下运动，遇到边缘后反弹

//每隔一段时间（20ms）改变小球的left和top


var ball = document.querySelector('.ball');
var disx =2;var disy =-2;



function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min )) + min;
}


function changeBg() {
    var r = getRandom(0, 256);
    var g = getRandom(0, 256);
    var b = getRandom(0, 256);
    ball.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
}

setInterval(function () {
    var rect = ball.getBoundingClientRect();
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    var ew = ball.offsetWidth;
    var eh = ball.offsetHeight;


var maxleft = w - ew;
var maxtop = h - eh;
    var x = rect.left;
    var y = rect.top;
    var left = x + disx;
    var top = y + disy;

    //控制范围
    if (left > maxleft) {
        left = maxleft;
        disx = -disx;
        changeBg()
    }
    if (left < 0) {
        left = 0;
        disx = -disx;
        changeBg()
    }
    if (top < 0) {
        top = 0;
        disy = -disy;
        changeBg()
    }
    if (top > maxtop) {
        top = maxtop;
        disy = -disy;
        changeBg()
    }
    
    ball.style.left = left + 'px';
    ball.style.top = top + 'px';


}, 2);
