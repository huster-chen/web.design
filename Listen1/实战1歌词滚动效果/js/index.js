
//切入点是数据 从数据角度 有啥数据
/**  
* 解析歌词字符串 得到一个歌词对象的数组  
*每个歌词对象
*{time：开始时间，words：歌词内容}
**/
function parseLrc() {
    var lines = lrc.split('\n');
    var result = [];//歌词对象数组
    for (var i = 0; i < lines.length; i++)
    {
        var str = lines[i];
        var parts = str.split(']');
        var timeStr = parts[0].
            substring(1);
        parseTime(timeStr);
        //  console.log(timeStr);
        // console.log(parts);
        var obj = {
            time: parseTime(timeStr),
            words: parts[1],
        };
        result.push(obj);
    }
    return result;
}
/**
 * 将一个时间字符串转换为数据
 * @param {String} timeStr 时间字符串 
 */
function parseTime(timeStr) {
    var parts = timeStr.split(':');
    
    return +parts[0]*60+ +parts[1];
}
var lrcData = parseLrc();
// console.log(lrcData);

//获取需要的dom
var doms={
    audio: document.querySelector('audio'),
    ul: document.querySelector('ul'),
    container:document.querySelector('.container')
}

/**计算出
 * 在当前状况下播放器播放到第几秒的情况下
 * lrcdata数组中，应该显示高亮显示的歌词下标
 */
function findIndex() {
    var curTime = doms.audio.currentTime;
    
    for (var i = 0; i < lrcData.length; i++) {
        if (curTime < lrcData[i].time) {
            return i - 1;
        }
    }
    return lrcData.length - 1;
}


//界面
/**
 * 创建歌词列表元素
 */
function createLrcElements() {
    var frag = document.createDocumentFragment();//文档片段
    for (var i = 0; i < lrcData.length; i++){
        var li = document.createElement('li');
        li.textContent = lrcData[i].words;
        frag.appendChild(li);
    }
    doms.ul.appendChild(frag);
}
createLrcElements();

//容器高度
var containerHeight = doms.container.clientHeight;
//li 高度
var liHeight = doms.ul.children[0].clientHeight;
//最大偏移量
var maxOffset = doms.ul.clientHeight - containerHeight;
/**
 * 设置ul 元素的偏移量
 */
function setoffset() {
    var index = findIndex();
   
    var offset = liHeight * index + liHeight / 2 - containerHeight / 2;
    if (offset < 0)
    {
        offset = 0;
    }
    if (offset > maxOffset)
    {
        offset = maxOffset;
    }
    doms.ul.style.transform = `translateY(-${offset}px)`;
    //去掉之前的样式
    var li = doms.ul.querySelector('.active');
    if (li){
        li.classList.remove('active');
    }
    li = doms.ul.children[index];
    if (li)
    {
        doms.ul.children[index].classList.add('active');
        }
    
    console.log(offset);
}


doms.audio.addEventListener('timeupdate', setoffset);

