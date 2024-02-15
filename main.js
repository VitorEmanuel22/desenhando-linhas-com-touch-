let canvas = document.getElementById("meuCanvas");
let ctx = canvas.getContext("2d");
let color="blue";
let largura="2";


let mouseX;
let mouseY;
let mouseXfinal;
let mouseYfinal;
let evento="";

canvas.addEventListener("mousedown", cliquei);

function cliquei(e){
      color=document.getElementById("cor").value;
      largura=document.getElementById("largura").value;
      evento="mousedown";
}

canvas.addEventListener("mousemove", movimentei);

function movimentei (e){
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    if (evento=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=largura;
        ctx.moveTo(mouseX,mouseY);
        ctx.lineTo(mouseXfinal, mouseYfinal);
        ctx.stroke();
    }
    mouseXfinal=mouseX;
    mouseYfinal=mouseY;
}

canvas.addEventListener("mouseup", naocliquei);

function naocliquei(){
    evento="mouseup";
}

function limpar(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}