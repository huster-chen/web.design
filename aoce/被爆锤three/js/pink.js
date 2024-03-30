var start = document.querySelector('button');
console.log(start);
var stop = document.querySelector('.stop');    
var score = document.querySelector(".score");
start.addEventListener('click', function () {
    start.style.display = 'none';
    stop.style.display = 'block';
    play();
});
stop.addEventListener('click', function () {
    start.style.display = 'block';
    stop.style.display = 'none';
    score.style.display = 'block';
    pause();
});

function play() {
    var container = document.getElementById("container");
    var numKeys = 4;  
    var keyWidth = 100 / numKeys;  
    for (var i = 0; i < numKeys; i++) {
        var key = document.createElement("div");
        key.className = "piano-key";
        key.style.left = (i * keyWidth) + "%";  
        key.style.width = keyWidth + "%";  
        key.style.animation = "fall " + (Math.random() * 5 + 2) + "s linear infinite";  
        container.appendChild(key);
    }
}

function pause() {
    clearPianoTiles()
    var keys = document.querySelectorAll('.piano-key');
    keys.forEach(function(key) {
        key.style.animationPlayState = 'paused';
    });
}

function clearPianoTiles() {
    var pianoTiles = document.querySelectorAll('.piano-key'); 
    pianoTiles.forEach(function(tile) {
        tile.parentNode.removeChild(tile); 
    });
}



function checkPianoTiles() {
    var pianoTiles = document.querySelectorAll('.piano-key'); 
    var gameViewportHeight = document.getElementById('gameViewport').clientHeight; 

    pianoTiles.forEach(function(tile) {
        var tileBottomPosition = tile.offsetTop + tile.offsetHeight; 
        if (tileBottomPosition >= gameViewportHeight) {
            tile.style.backgroundColor = 'red'; 
            // 将到达底部的钢琴块变成红色
            setTimeout(function () {
                tile.style.backgroundColor = 'black';
                tile.parentNode.removeChild(tile); 
                  selectaera()
            }, 100); 
        }
    });
}

setInterval(checkPianoTiles, 100);
setInterval(play, 3000);




function selectaera() {
    var pianoTiles = document.querySelectorAll('.piano-key'); 
    
    pianoTiles.forEach(function(tile) {
        var horizontalPosition = tile.offsetLeft;
        console.log('钢琴块的横向位置：', horizontalPosition);
        selectButton(horizontalPosition)
    });
    
    
}

function selectButton(horizontalPosition) {
    var numKeys = 4;
    var keyWidth = 100 / numKeys;
    
    var button;
    
    if (horizontalPosition >= 0 && horizontalPosition < keyWidth) {
        button = 'A';
    } else if (horizontalPosition >= keyWidth && horizontalPosition < keyWidth * 2) {
        button = 'S';
    } else if (horizontalPosition >= keyWidth * 2 && horizontalPosition < keyWidth * 3) {
        button = 'D';
    } else if (horizontalPosition >= keyWidth * 3 && horizontalPosition < keyWidth * 4) {
        button = 'F';
    } else {
        button = 'Unknown'; 
    }
    
    return button;
}

