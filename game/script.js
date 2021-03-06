// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// End state
modelfungo = function() {
        console.log("func called")
        modal.style.display = "block";
        x = document.querySelector(".gamehead");
        x.textContent = "Game Over"

    }
    // Win state
modelfunwin = function() {
    console.log("func called")
    modal.style.display = "block";
    x = document.querySelector(".gamehead");
    x.textContent = "Congrats! You Win"

}

document.getElementById("demo").addEventListener("click", myFunction);

function myFunction() {
    document.location.reload();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    // Timer function
function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;

    function timer() {
        if (playing) {
            diff = duration - (((Date.now() - start) / 1000) | 0);
            minutes = (diff / 60) | 0;
            seconds = (diff % 60) | 0;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = "Game ends in " + minutes + ":" + seconds;
            // game over when time is finished
            if (diff <= 0) {
                display.textContent = "Game Over";
                start = Date.now() + 1000;
                playing = false
                modelfungo();
            }
        }
    };
    timer();
    setInterval(timer, 1000)
}
// timer
window.onload = function() {
    twominutes = 60;
    x = document.querySelector("#timerel");
    startTimer(twominutes, x)
}
playing = true

// lager en canvas for figuren og figuren
var canvas = document.getElementById("canvas");
b = canvas.getContext("2d");
canvas.width = 2000;
canvas.height = 320;

document.body.appendChild(canvas);
// start score(steps left)
var score = 8000;
// locations
var posX = 150;
posY = 150;
dx = 0;
dy = 0;
// Limits to movement
setInterval(function() {
    posX += dx;
    posY += dy;
    // Du har vunnet når figuren kommer over 1806px
    if (posX > 1806) {
        modelfunwin();
        x.textContent += " Your final score is " + score;
    }

    if (posX > 1900) {
        dx = 0;
        posX = 1900;
    }
    if (posX < 10) {
        dx = 0;
        posX = 10;
    }
    if (posY > 310) {
        dy = 0;
        posY = 310;
    }
    if (posY < 0) {
        dy = 0;
        posY = 0;
    }
    // character
    b.fillStyle = "black";
    b.fillRect(posX + 10, posY, 10, 10);
    // Right clear
    b.fillStyle = "white";
    b.fillRect(posX + 9, posY, 1, 10);
    // left clear
    b.fillStyle = "white";
    b.fillRect(posX + 19, posY, 1, 10);
    // up clear
    b.fillStyle = "white";
    b.fillRect(posX + 10, posY + 9, 10, 1);
    // down clear
    b.fillStyle = "white";
    b.fillRect(posX + 10, posY - 1, 10, 1);
}, 20)

window.addEventListener("keydown", press001, true);
// key controles
function press001(event) {
    switch (event.keyCode) {
        // left
        case 65:
            dx = -1;
            dy = 0;
            score -= 1;
            break;
            // up
        case 87:
            dx = 0;
            dy = -1;
            score -= 1;
            break;
            // right
        case 68:
            dx = 1;
            dy = 0;
            score -= 1;
            break;
            // down
        case 83:
            dx = 0;
            dy = 1;
            score -= 1;
            break;
    }
    document.getElementById("c").innerHTML = "Score: " + score;
    if (score === 0) {
        modelfungo();
    }
}
// stop after oneclick
window.addEventListener("keyup", press002, true);

function press002(event) {
    switch (event.keyCode) {
        case 65:
            dx = 0;
            dy = 0;
            break;

        case 87:
            dx = 0;
            dy = 0;
            break;

        case 68:
            dx = 0;
            dy = 0;
            break;

        case 83:
            dx = 0;
            dy = 0;
            break;
    }
}