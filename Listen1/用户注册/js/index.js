/**
 * 根据协议的多选框是否选中设置注册按钮状态
 */

function $(selector)
{
    return document.querySelector(selector);
}
function setSubmitButtonStatus() {
    var agree = document.querySelector('.policy input');
    var btn=document.querySelector('button[type="submit"]');
    btn.disabled = !agree.checked;
}   

/**
 * 根据手机号文本框中的文本，设置发送验证码按钮的状态
 */
function setSendCodeButtonStatus() {
    var txt = document.querySelector('#txtPhone');
    var btn = document.querySelector('.captcha button');
    btn.disabled = txt.value.length !== 11;

}

/**
 * 根据当前选中的爱好，设置已选择爱好文本
 */
function setSelectedLoves() {
    var sel = $('select');
    var choose = $('#selChoose');
    console.log(sel,choose);
    for (var i = 0; i < sel.children.length; i++){
        if (sel.children[i].selected) {
            choose.innerText = '已选择的爱好：'+sel.children[i];
        }
    }
}
function setSelectedLoves() {
    var sel = $('select');
    var choose = $('#selChoose');
    console.log(sel, choose);
    var loves = [];
    for (var i = 0; i < sel.children.length; i++){
        if (sel.children[i].selected) {
           loves.push(sel.children[i].innerText);
        }
    }
    var str = loves.join(',');
    choose.innerText = '已选择的爱好：' + str;
}



// 将上面的函数和用户事件连接
$('#txtPhone').addEventListener('input', setSendCodeButtonStatus); 
$('.policy input').addEventListener('change', setSubmitButtonStatus);
$('select').addEventListener('change', setSelectedLoves);
// 给所有的文本框注册事件，若用户在输入的过程中按下了ESC，则将文本框清空
var txts = document.querySelectorAll('.txt');
for (var i = 0; i < txts.length; i++) {
    txts[i].addEventListener('keydown', function (e) {
        if (e.key=== 'Escape') {
            this.value = '';
        }
    });
}