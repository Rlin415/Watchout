// start slingin' some d3 here.
var width = 960;
var height = 500;
var data = [];
var count = 0;
var ambush;
var board;
var army;
var asteroids;
var destroyer;
var drag;

board = d3.select('.board')
  .append('svg')
  .attr('width', 1000)
  .attr('height', 500)
  .append('g');

army = function(data) {

  asteroids = board.selectAll(".army")
   .data(data);

  asteroids.enter()
    .append("svg:image")
    .attr('class', 'army')
    .attr("x", Math.floor(Math.random() * 900))
    .attr("y", Math.floor(Math.random() * 390))
    .attr('height', '5%')
    .attr('width', '5%')
    .attr('xlink:href', "images/asteroid.png");
};


ambush = setInterval(function() {
  count++;
  if (count === 50) {
    clearInterval(ambush);
  }
  data.push(0);
  army(data);
}, 250);

move = setInterval(function(){
  asteroids = board.selectAll('.army').data(data);

  asteroids
    .transition().duration(900)
    //use a function so that it forces d3 to invoque it
    //call math.random every time
    .attr('x', function () {return Math.floor(Math.random() * 900);})
    .attr("y", function () {return Math.floor(Math.random() * 390);});
}, 1000);


//create our astorid
destroyer = {'x': 500, 'y': 250};

drag = d3.behavior.drag()
  .on('drag', function(d, i) {
    d.x += d3.event.dx;
    d.y += d3.event.dy;
    d3.select(this).attr('x', function(d) {
      return d.x;
    });
    d3.select(this).attr('y', function(d) {
      return d.y;
    });
  });

board.append("svg:image")
  .data([destroyer])
  .attr('id', 'destroyer')
  .attr('x', destroyer.x)
  .attr('y', destroyer.y)
  .attr('xlink:href', "images/8ball_with_flames.png")
  .attr('height', '10%')
  .attr('width', '10%')
  .call(drag);
