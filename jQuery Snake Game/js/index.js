// JS &jQuery

// $(document).ready(function() {
//   let canvas = $("#canvas")[0];
//   let ctx = canvas.getContext("2d");

//   let w = $(canvas).width();
//   let h = $(canvas).height();

//   let snakeArray;
//   let cw = 10;
//   let food;
//   let direction;
//   let score;
//   let speed = 60;

//   function init() {
//     direction = "right";
//     score = 0;
//     createSnake();
//     createFood();

//     if (typeof gameLoop != "undefined") {
//       clearInterval(gameLoop);
//     }
//     gameLoop = setInterval(paint, speed);
//   }

//   init();

//   function createFood() {
//     food = {
//       x: Math.round((Math.random() * (w - cw)) / cw),
//       y: Math.round((Math.random() * (h - cw)) / cw)
//     };
//   }

//   function createSnake() {
//     let length = 5;
//     snakeArray = [];
//     for (let i = 0; i < length; i++) {
//       snakeArray[i] = { x: i, y: 0 };
//     }
//   }

//   function createCell(x, y) {
//     ctx.fillStyle = "black";
//     ctx.fillRect(x * cw, y * cw, cw, cw);
//     ctx.strokeStyle = "white";
//     ctx.strokeRect(x * cw, y * cw, cw, cw);
//   }

//   function paint() {
//     ctx.fillStyle = "white";
//     ctx.fillRect(0, 0, w, h);
//     ctx.strokeStyle = "black";
//     ctx.strokeRect(0, 0, w, h);

//     for (let i = 0; i < snakeArray.length; i++) {
//       let c = snakeArray[i];
//       createCell(c.x, c.y);
//     }

//     createCell(food.x, food.y);
//   }
// });

// jQuery Snake Game

$(document).ready(function() {
  let canvas = $("#canvas")[0];
  let ctx = canvas.getContext("2d");

  let w = $("#canvas").width();
  let h = $("#canvas").height();
  let cw = 10;
  let snakeArray;
  let food;
  let direction;
  let speed = 60;
  let scoreContainer = $("#score");

  function init() {
    createSnake();
    createFood();

    score = 0;
    direction = "right";

    if (typeof gameLoop != "undefined") {
      clearInterval(gameLoop);
    }
    gameLoop = setInterval(print, speed);
  }

  init();

  function createSnake() {
    let length = 5;
    snakeArray = [];
    for (let i = length - 1; i >= 0; i--) {
      snakeArray.push({ x: i, y: 0 });
    }
  }

  function createCell(x, y) {
    ctx.fillStyle = "black";
    ctx.fillRect(x * cw, y * cw, cw, cw);
    ctx.strokeStyle = "white";
    ctx.strokeRect(x * cw, y * cw, cw, cw);
  }

  function createFood() {
    food = {
      x: Math.round((Math.random() * (w - cw)) / cw),
      y: Math.round((Math.random() * (h - cw)) / cw)
    };
  }

  function print() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, w, h);

    let nx = snakeArray[0].x;
    let ny = snakeArray[0].y;

    if (direction == "right") nx++;
    else if (direction == "left") nx--;
    else if (direction == "up") ny--;
    else if (direction == "down") ny++;

    for (let i = 0; i < snakeArray.length; i++) {
      let c = snakeArray[i];
      createCell(c.x, c.y);
    }

    if (
      nx == -1 ||
      nx == w / cw ||
      ny == -1 ||
      ny == h / cw ||
      triggerCollision(nx, ny, snakeArray)
    ) {
      init();
      return;
    }

    if (nx == food.x && ny == food.y) {
      var tail = { x: nx, y: ny };
      score++;
      createFood();
    } else {
      var tail = snakeArray.pop();
      tail.x = nx;
      tail.y = ny;
    }

    snakeArray.unshift(tail);

    createCell(food.x, food.y);
    scoreContainer.html(score);
  }

  function triggerCollision(x, y, array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].x == x && array[i].y == y) {
        return true;
      }
    }
    return false;
  }

  $(document).keydown(function(e) {
    if (e.keyCode == 37 && direction !== "right") direction = "left";
    else if (e.keyCode == 39 && direction !== "left") direction = "right";
    else if (e.keyCode == 38 && direction !== "down") direction = "up";
    else if (e.keyCode == 40 && direction !== "up") direction = "down";
  });
});
