
(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
var hit = 0;
var x = 500;
var xdir = 1;
var myReq;
var myInterval;

function trigger() {
    if (x == 1000 || x == 400) {

        xdir = -1 * xdir
    }


    if (xdir == 1) {
        x = x + 5;
    }
    else {
        x = x - 5;
    }

    if (hit == 0) {
        requestAnimationFrame(drawCowboy);
    } else if (hit == 1) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        requestAnimationFrame(draw2Cowboy);
        ctx.font = "30px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("this was a mistake", 150, 390);
    }

    
    
    // requestAnimationFrame(bullet);

}


function drawCowboy() {

    ctx.clearRect(0, 0, 1000, 300);
    //head
    ctx.beginPath();
    ctx.arc(150, 390, 60, 0, 2 * Math.PI);
    ctx.stroke();

    // body
    ctx.moveTo(150, 450);
    ctx.lineTo(150, 640);
    ctx.lineWidth = 12;
    ctx.stroke();

    // left arm
    ctx.moveTo(10, 600);
    ctx.lineTo(150, 540);
    ctx.stroke();

    // right arm
    ctx.moveTo(300, 500);
    ctx.lineTo(150, 540);
    ctx.stroke();


    // left leg
    ctx.moveTo(-30, 900);
    ctx.lineTo(150, 640);
    ctx.stroke();

    // right leg
    ctx.moveTo(300, 900);
    ctx.lineTo(150, 640);
    ctx.stroke();


    // gun
    ctx.moveTo(300, 450);
    ctx.lineTo(300, 540);
    ctx.stroke();
    ctx.moveTo(300, 470);
    ctx.lineTo(400, 470);
    ctx.stroke();

    ctx.closePath();
}


// drawCowboy();


function draw2Cowboy() {
    ctx.clearRect(0, 0, 1000, 300);
    //head
    ctx.beginPath();
    ctx.arc(380, 720, 60, 0, 2 * Math.PI);


    // body
    ctx.moveTo(350, 750);
    ctx.lineTo(150, 640);
    ctx.lineWidth = 12;


    // left arm
    ctx.moveTo(150, 650);
    ctx.lineTo(250, 700);


    // right arm
    ctx.moveTo(450, 950);
    ctx.lineTo(250, 700);



    // left leg
    ctx.moveTo(-30, 900);
    ctx.lineTo(150, 640);


    // right leg
    ctx.moveTo(300, 900);
    ctx.lineTo(150, 640);
    ctx.stroke()



  


}



function bullet() {
    ctx.clearRect(380, 300, 800, 800);
    ctx.beginPath();
    var draw = ctx.arc(x, 470, 3, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fill();
    if (ctx.isPointInPath(400, 470)) {
        clearInterval(myInterval);
        setTimeout(bullet,10);
        hit=1;
      };
}


myReq = requestAnimationFrame(bullet);
myInterval = setInterval(bullet, 15);
setInterval(trigger, 15);