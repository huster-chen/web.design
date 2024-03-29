var btn1 = document.querySelector('.header-btn1');
var btn2 = document.querySelector('.header-btn2');
var btn3 = document.querySelector('.header-btn3');
var btn4 = document.querySelector('.header-btn4');
console.log(btn1, btn2, btn3, btn4);
var iframe = document.querySelector("iframe");
    btn1.onclick = function(){
        iframe.src = "1.html";
    }
    
    btn2.onclick = function(){
        iframe.src = "2.html"
    }
    btn3.onclick = function(){
        iframe.src = "3.html"
    }
    btn4.onclick = function(){
        iframe.src = "4.html"
    }