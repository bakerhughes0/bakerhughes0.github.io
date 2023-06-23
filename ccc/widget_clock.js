function clock01(){
var o=document.createElement('canvas');
o.width=250;o.height=250
move(o,[0,0,250,250]);
o.ctx=o.getContext('2d');
var W=250,H=250,w2=125,h2=125,pi=3.141592653
o.needle = function(angle, r1, r2, col){
  var ca = Math.cos(angle), sa = Math.sin(angle)
  x1 = w2 - 100 * ca * r1;
  y1 = h2 - 100 * sa * r1;
  x2 = w2 + 100 * ca * r2;
  y2 = h2 + 100 * sa * r2;
  o.ctx.beginPath();
  o.ctx.strokeStyle = col;
  o.ctx.moveTo(x1, y1);
  o.ctx.lineTo(x2, y2);
  o.ctx.stroke();
  };
o.set_clock = function(){
  // erase clock
  o.ctx.beginPath()
  o.ctx.fillStyle = '#111';
  o.ctx.arc(w2, h2, 100 * 0.89, 0, 2 * pi)
  o.ctx.fill()
  // redraw numbers
  o.ctx.beginPath()
  o.ctx.arc(w2, h2, 100 * 0.05, 0, 2 * pi)
  o.ctx.fillStyle = '#eee'
  o.ctx.fill()
  for (var i=1;i<=12;i++){
    angle = i * pi / 6 - pi / 2
    x3 = w2 + 100 * Math.cos(angle) * 0.75
    y3 = h2 + 100 * Math.sin(angle) * 0.75
    o.ctx.font = "18px Arial"
    o.ctx.textAlign = "center"
    o.ctx.textBaseline = "middle"
    o.ctx.fillText(i, x3, y3)
    }
    // cell for day
    o.ctx.fillStyle = "#ddd"
    o.ctx.fillRect(W * 0.65, H * 0.47, W * 0.1, H * 0.06)
  // print day
  var now = new Date();
  var day = now.getDate()
  o.ctx.font = "bold 14px Arial"
  o.ctx.textAlign = "center"
  o.ctx.textBaseline = "middle"
  o.ctx.fillStyle="#000"
  o.ctx.fillText(day, W * 0.7, H * 0.5)
  // draw needles for hour, minute, seconds
  o.ctx.lineWidth = 3
  var hour = now.getHours() % 12 + now.getMinutes() / 60
  var angle = hour * 2 * pi / 12 - pi / 2
  o.needle(angle, 0.05, 0.5, '#fff')
  var minute = now.getMinutes() + now.getSeconds() / 60
  var angle = minute * 2 * pi / 60 - pi / 2
  o.needle(angle, 0.05, 0.85,'#eee')
  o.ctx.lineWidth = 2
  var second = now.getSeconds() + now.getMilliseconds() / 1000
  var angle = second * 2 * pi / 60 - pi / 2
  o.needle(angle, 0.15, 0.85, '#a23')
  setTimeout(o.set_clock,1000);
  }
with (o.ctx) {
  beginPath()
  arc(w2, h2, 100, 0, 2 * pi)
  fillStyle = '#111'
  fill()
  beginPath()
  lineWidth = 6
  arc(w2,h2, 100 + 3, 0, 2 * pi)
  strokeStyle = '#222'
  stroke()
  for (var i=0;i<=60;i++){
    lineWidth = i%5 == 0 ? 3 : 1;
    var angle = i * 2 * pi / 60 - pi / 3
    x1 = w2 + 100 * Math.cos(angle)
    y1 = h2 + 100 * Math.sin(angle)
    x2 = w2 + 100 * Math.cos(angle) * 0.9
    y2 = h2 + 100 * Math.sin(angle) * 0.9
    beginPath()
    strokeStyle = '#eee'
    moveTo(x1, y1)
    lineTo(x2, y2)
    stroke()
    }
  o.set_clock()
  }
return o;
}
