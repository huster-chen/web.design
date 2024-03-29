// // 输入待办事项，按下回车后，添加事项到列表
// var txt = document.querySelector('.txt');
// var ul = document.querySelector('.todo-list');
// var delectallnum=0;
// var dbtn = document.createElement('button');
// var t = document.createTextNode('全部删除');
// dbtn.appendChild(t);

// function creatLi(content) {
//     var li = document.createElement('li');
//         var span = document.createElement('span');
//         var button = document.createElement('button');
//         li.appendChild(button);
//         li.appendChild(span);
//     span.innerText = content;;
//         button.innerText = '删除';
//         ul.appendChild(li);

//         button.addEventListener('click', function () {
//             li.remove();
//         })
// }
// txt.addEventListener('keydown', function (e) {
//     if (e.key === 'Enter') {
//         if (!this.value.trim()) {
//             return;
//         }

//         creatLi(this.value.trim());
//         checkTodos(); 
//         ul.appendChild(dbtn);
//         this.value = '';
        
//     }
// });
// // 点击删除后，删除对应的待办事项
// creatLi('abc');
// // 给 '全部删除' 按钮添加点击事件处理器
// dbtn.addEventListener('click', function() {
//     // ul 里的所有 li 都会被移除，只保留 '全部删除' 按钮
//     while (ul.firstChild !== dbtn) {
//         // 每次移除 ul 的第一个子节点，直到第一个子节点就是 '全部删除' 按钮
//         ul.removeChild(ul.firstChild);
//     }
// });

// // 检查待办事项列表中是否有待办事项，根据结果显示或隐藏 '全部删除' 按钮
// function checkTodos() {
//     // 获取 ul 中所有的 li 元素
//     var todos = ul.getElementsByTagName('li');
//     // 如果 ul 中有 li，显示 '全部删除' 按钮，否则隐藏它
//     dbtn.style.display = todos.length > 0 ? 'block' : 'none';
// }
// button.addEventListener('click', function () {
//     li.remove();
//     checkTodos(); // 调用 checkTodos 函数
// })

// 输入待办事项，按下回车后，添加事项到列表
var txt = document.querySelector('.txt');
var ul = document.querySelector('.todo-list');
var dbtn = document.createElement('button');
dbtn.appendChild(document.createTextNode('全部删除'));

dbtn.style.color = "#b83f45"; // 改变文字颜色为白色
dbtn.style.backgroundColor = "#fff"; // 改变按钮背景颜色为蓝色
dbtn.style.border = "none"; // 删除边框
dbtn.style.padding = "10px 20px"; // 添加内边距
dbtn.style.marginTop = "10px"; // 添加上边距
dbtn.style.cursor = "pointer"; // 改变鼠标悬停在按钮上时的形状
dbtn.style.fontSize = "16px"; // 改变字体大小
dbtn.style.float = 'right';

function checkTodos() {
    var todos = ul.getElementsByTagName('li');
    dbtn.style.display = todos.length > 0 ? 'block' : 'none';
}

function creatLi(content) {
    var li = document.createElement('li');
    var span = document.createElement('span');
    var button = document.createElement('button');
    li.appendChild(button);
    li.appendChild(span);
    
    span.innerText = content;
    button.innerText = '删除';
    ul.appendChild(li);

    button.addEventListener('click', function () {
        li.remove();
        checkTodos();
    })
    
    checkTodos();
}

txt.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        if (!this.value.trim()) {
            return;
        }

        creatLi(this.value.trim());
        ul.appendChild(dbtn);
        this.value = '';
    }
});

dbtn.addEventListener('click', function() {
    while (ul.firstChild !== dbtn) {
        ul.removeChild(ul.firstChild);
    }
    checkTodos();
});


checkTodos();