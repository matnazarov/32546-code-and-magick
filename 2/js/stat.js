var X_START = 100;
var Y_START = 10;
var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var GAP = 10;
var HEIGHT_FONT = 16;
var HEIGHT_GRAPHIC = 150;
var WIDTH_BAR = 40;
var GAP_BAR = 50;
var TEXT_X = X_START + 2 * GAP;
var TEXT_Y = Y_START  + 3 * GAP;
/**
Рисуем окно статистики
* @param {Object} ctx
* @param {number} x
* @param {number} y
* @param {string} color
* @param {number} width
* @param {number} height
*/
var renderCloud = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};
/**
Рисуем гистограмму
* @param {Object} ctx
* @param {array} names имя игроков
* @param {array} times время прохождения игры игроков
*/
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, X_START + GAP, Y_START + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0,0,0,0.7)');
  renderCloud(ctx, X_START, Y_START, CLOUD_WIDTH, CLOUD_HEIGHT, 'white');
  ctx.strokeStyle = 'black';
  ctx.strokeRect(X_START, Y_START, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = 'black';
  ctx.font = HEIGHT_FONT + 'px PT Mono';
  ctx.fillText('Ура вы победили!', TEXT_X, TEXT_Y);
  ctx.fillText('Список результатов:', TEXT_X, TEXT_Y + GAP / 2 + HEIGHT_FONT);
  var maxTime = Math.max.apply(null, times);
  for (var i = 0; i < names.length; i++) {
    var heightBar = Math.round((HEIGHT_GRAPHIC * times[i]) / maxTime);
    var barX = TEXT_X + GAP * 2 + (WIDTH_BAR + GAP_BAR) * i;
    ctx.fillStyle = 'black';
    ctx.fillText(Math.round(times[i]), barX, TEXT_Y + 2 * HEIGHT_FONT + 1.5 * GAP + HEIGHT_GRAPHIC - heightBar);
    ctx.fillText(names[i], barX, TEXT_Y + 3 * HEIGHT_FONT + 2.5 * GAP + HEIGHT_GRAPHIC);
    if (names[i] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 128,' + Math.random() + ')';
    }
    ctx.fillRect(barX, TEXT_Y + 3 * HEIGHT_FONT + GAP + HEIGHT_GRAPHIC - heightBar, WIDTH_BAR, heightBar);
  }
};
