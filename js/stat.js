'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var TEXT_WIDTH = 50;
var TITLE_HEIGHT = 130;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - TITLE_HEIGHT - GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  ctx.fillText("Ура вы победили!", CLOUD_X + GAP * 2, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText("Список результатов: ", CLOUD_X + GAP * 2, CLOUD_Y + GAP + FONT_GAP * 2);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'black';

    ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + (TEXT_WIDTH + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_WIDTH + (TEXT_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP * 2 - FONT_GAP - (barHeight * times[i]) / maxTime);

    if (players[i] === "Вы") {
      ctx.fillStyle = 'green';
    } else {
      ctx.fillStyle = "hsl(242, " + Math.round(Math.random() * 100) + "%, 50%)";
    }

    ctx.fillRect(CLOUD_X + BAR_WIDTH + (TEXT_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP - FONT_GAP, BAR_WIDTH, - (barHeight * times[i]) / maxTime);
  }
};
