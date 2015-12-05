// start slingin' some d3 here.
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

var army = function(data) {

  var asteroids = board.selectAll("image")
   .data(data);

  asteroids.enter()
    .append("svg:image")
    .attr("x", Math.floor(Math.random() * 900))
    .attr("y", Math.floor(Math.random() * 390))
    .attr('height', '5%')
    .attr('width', '5%')
    .attr('xlink:href', "./asteroid.png");
};


ambush = setInterval(function() {
  count++;
  if (count === 50) {
    clearInterval(ambush);
  }
  data.push({});
  army(data);
}, 250);

var move = setInterval(function(){
  var asteroids = board.selectAll('image').data(data);

  asteroids
    .transition().duration(900)
    //use a function so that it forces d3 to invoque it
    //call math.random every time
    .attr('x', function () {return Math.floor(Math.random() * 900)})
    .attr("y", function () {return Math.floor(Math.random() * 390)});
}, 500);


//So if we want to make it move to the right,
//we are going to update the x attribute. That’s how we do it:

// mySquare
//   .transition()
//   .attr("x",320);
