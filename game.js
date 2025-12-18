// Simple Snake Game
let canvas, ctx;
let snake, food, direction;
function startSnake(){
  canvas = document.getElementById("snakeGame");
  ctx = canvas.getContext("2d");
  snake = [{x:10,y:10}];
  food = {x:5,y:5};
  direction = "RIGHT";
  document.addEventListener("keydown", changeDir);
  setInterval(updateSnake,100);
}

function changeDir(e){
  if(e.key==="ArrowUp") direction="UP";
  if(e.key==="ArrowDown") direction="DOWN";
  if(e.key==="ArrowLeft") direction="LEFT";
  if(e.key==="ArrowRight") direction="RIGHT";
}

function updateSnake(){
  let head = {...snake[0]};
  if(direction==="UP") head.y--;
  if(direction==="DOWN") head.y++;
  if(direction==="LEFT") head.x--;
  if(direction==="RIGHT") head.x++;
  snake.unshift(head);
  if(head.x===food.x && head.y===food.y){
    food={x:Math.floor(Math.random()*20),y:Math.floor(Math.random()*20)};
  } else {snake.pop();}
  drawSnake();
}

function drawSnake(){
  ctx.fillStyle="#05080f";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="#00f2ff";
  snake.forEach(part=>ctx.fillRect(part.x*15,part.y*15,14,14));
  ctx.fillStyle="#ff007f";
  ctx.fillRect(food.x*15,food.y*15,14,14);
}
