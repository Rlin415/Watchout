// start slingin' some d3 here.
//var image =  url('asteroid.png');
var width = 960;
var height = 500;
var data = [];
var count = 0;
var ambush;

var board = d3.select('.board')
  .append('svg')
  .attr('width', 1000)
  .attr('height', 500)
  .append('g');

function army(dat) {
  var asteroids = board.selectAll("image")
   .data(data);

  asteroids.enter()
    .append("svg:image")
    .attr("x", Math.floor(Math.random() * 900))
    .attr("y", Math.floor(Math.random() * 390))
    .attr('height', '5%')
    .attr('width', '5%')
    .attr('xlink:href', "./asteroid.png");
}

ambush = setInterval(function() {
  count++;
  if (count === 30) {
    clearInterval(ambush);
  }
  data.push(0);
  army(data);
}, 100);
