function xGroup(){
  var o = new xDiv();sBrR(o,[0,0,8,8]);sOvf(o,'hidden');
  var bh=new xDiv();sPar(bh,o);sBkC(bh,'#def');
  o.b=new xDiv();sPar(o.b,o);sBkC(o.b,'#ccc');
  o.nom=new xLab();sPar(o.nom,bh);sFtC(o.nom,'#222');sTxt(o.nom,"...");
  o.eRes=function(){
    x=gSiz(o);
    move(bh,[0,0,x[0],30]);
    move(o.nom,[5,2,x[0]-10,28]);
    move(o.b,[0,30,x[0],x[1]-30]);
    }
  return o;
  }

function xSw(){
  var o = document.createElement('canvas')
  o.width=160; o.height=160;
  o.ctx = o.getContext('2d');
  o.num = 0;
  o.v = 0;
  o.val=function(v){o.v=parseInt(v); o.draw();};
  o.draw=function(){
    with(o.ctx) {
      clearRect(0,0,160,160);
      shadowBlur=0;shadowColor='';
      beginPath();
      var gradient = createRadialGradient(80,80,0,80,80,80);
      gradient.addColorStop(0,'#aaa');
      gradient.addColorStop(.9,'#ddd');
      gradient.addColorStop(1,'#bbb');
      arc(80,80,80,0,6.28);
      fillStyle = gradient;
      fill();
      lineWidth=17;
      lineCap='round';
      if(o.v){strokeStyle='#292';shadowColor = "#5D5";shadowBlur = 25;}else{strokeStyle='#444';}
      beginPath();
      arc(80,80,44,-2.07,-1.07,1);
      moveTo(80,70);lineTo(80,38);
      stroke();
      }
    };o.draw();
  sMoP(o,'pointer');
  return o;
  }

function xLamp1(){
  var o = new xDiv();
  o.num = 0;
  var xval=0;
  var i=new xSw();sPar(i,o);
  o.val=function(v){i.val(v); };
  function draw(){i.draw();}; draw();
  function toggle(){
    var s = xSrv('dmx');s.add('sw', o.num);
    s.eChg=function(){o.val(parseInt(s.value));draw();}
    s.post();
    }			
  sThE(i,toggle)
  o.nom = new xLab();sPar(o.nom,o);sMoP(o.nom,'pointer');
  sThE(o.nom,toggle)
  o.eRes=function(){
    x=gSiz(o);
    move(i,[10,10,60,60]);
    move(o.nom,[80,22,x[0]-60,40]);
    }
  return o;
  }

function xElev(){
  var og = document.createElement('canvas');og.width=50;og.height=50;og.ctx = og.getContext('2d');
  with(og.ctx) {
    var grd = createRadialGradient(25, 25, 10, 25, 25, 40);
    grd.addColorStop(0, "rgba(0,0,0, 0.0)");
    grd.addColorStop(1, "rgba(0,0,0, 1)");
    fillStyle = grd;
    fillRect(0,0,50,50);
    strokeStyle = 'rgba(255,0,0, 0.8)';
    beginPath();moveTo(0,25);lineTo(50,25);stroke();
  }
  var o = document.createElement('canvas');o.width=50;o.height=5400; o.ctx = o.getContext('2d');
  with(o.ctx) {
    fillStyle = '#222';
    fillRect(0,0,50,5400);
    fillStyle = '#eee';
    textAlign = "right";textBaseline = "middle";
    font = '12px Arial';
    for(y=-90;y<=90;y+=1){
      y2=(y+90)*30;
      fillRect(0,y2-1,20,2);
      fillText(-y.toString()+'\u00BA',46,y2);
        
     for(var y3=2;y3<10;y3+=2){
        fillRect(0,y2-1+y3*3,10,2);
        }
      }
    }
  a = new xDiv();sBrW(a,[1]);;sBrC(a,['#766']);sBrR(a,[4]);
  sOvf(a,'hidden');
  a.val = function(deg){
    pos = -2675+deg*30;
    move(o,[0,pos,50,5400]);
    }
  b = new xDiv();move(b,[0,0,50,5400]);sPar(b,a)

  sPar(o,b)
  c = new xDiv();sPar(c,a);
  move(c,[0,0,320,50]);
  sPar(og,c);sOpa(c,1)
  return a;

  }


function xGyro(){
  var og = document.createElement('canvas');og.width=320;og.height=50;og.ctx = og.getContext('2d');
  with(og.ctx) {
    var grd = createRadialGradient(160, 25, 30, 160, 25, 160);
    grd.addColorStop(0, "rgba(0,0,0, 0.0)");
    grd.addColorStop(1, "rgba(0,0,0, 0.7)");
    fillStyle = grd;
    fillRect(0,0,320,50);
    strokeStyle = 'rgba(255,0,0, 0.8)';
    beginPath();moveTo(160,0);lineTo(160,50);stroke();
  }
  var o = document.createElement('canvas');o.width=4320;o.height=80; o.ctx = o.getContext('2d');
  with(o.ctx) {
    fillStyle = '#222';
    fillRect(0,0,4320,100);
    fillStyle = '#eee';
    textAlign = "center";
    txt='';
    for(var x=0;x<=720;x++){
      x2=x-180;
      if((x % 1)==0){
        fillRect(x*6-1,75,2,-10);
        }
      if((x % 2)==0){
        fillRect(x*6-1,75,2,-20);
        }
      if((x % 10)==0){
        fillRect(x*6-2,75,4,-30);
        }
      if((x % 90)==0){
        font = '36px Arial';
        if(x2==0 || x2==360){txt='N';}
        else if(x2==90 || x2==450){txt='E';}
        else if(x2==-180 || x2==180 || x2==540){txt='S';}
        else if(x2==-90 ||x2==270){txt='O';}
        else{txt=x2.toString()}
        fillText(txt,x*6,35);
        }
       else if((x % 10)==0){
        font = '20px Arial';
        txt=(x2+360) % 360
        fillText(txt.toString(),x*6,35);
        }
      }
    }

  a = new xDiv();move(a,[100,100,320,40]);sBrW(a,[1]);;sBrC(a,['#766']);sBrR(a,[4]);
  sOvf(a,'hidden');
  a.val = function(deg){
    pos = -(deg % 360)*3-(180*3)+(320/2);
    move(o,[pos,-4,2160,45]);
    }
  b = new xDiv();move(b,[0,0,320,50]);sPar(b,a)
  sRot(b,[25,0,0]);
  sPar(o,b)
  c = new xDiv();sPar(c,a);
  move(c,[0,0,320,50]);
  sPar(og,c);sOpa(c,1)
  return a;
  }

function xSun(){
  var o = document.createElement('canvas');o.width=200;o.height=200;o.ctx=o.getContext('2d');
  o.a=-.2;
  o.b = 0;
  o.draw = function(){
  with(o.ctx) {
    clearRect(0,0,200,200);
    lineWidth=3;
    var grd = createRadialGradient(90, 50, 20, 100, 60, 100);
    grd.addColorStop(0, '#fe3');
    grd.addColorStop(1, '#f91');
    fillStyle = grd
    beginPath();
    arc(100,100,44,0,6.28,0);
    fill();
    for(a=0;a<6.28;a+=(6.28/7)){
      b=o.a+a;
      b-=(o.a/3);
      r=92-8*Math.sin(o.b*.9);
      beginPath()
      moveTo(100+40*Math.cos(b-.06),100+40*Math.sin(b-.06));
      lineTo(100+r*Math.cos(b),100+r*Math.sin(b));
      lineTo(100+40*Math.cos(b+.06),100+40*Math.sin(b+.06));
      fill();
      }
    for(a=0;a<6.28;a+=(6.28/13)){
      b=o.a+a-.12;
      r=56+2*Math.sin(o.b*1.5);
      beginPath()
      moveTo(100+40*Math.cos(b-.08),100+40*Math.sin(b-.08));
      lineTo(100+r*Math.cos(b),100+r*Math.sin(b));
      lineTo(100+40*Math.cos(b+.08),100+40*Math.sin(b+.08));
      fill();
      }
    
    for(a=0;a<6.28;a+=(6.28/26)){
      b=o.a+a-.23;
      r=58+2*Math.sin(o.b*1.2);
      beginPath()
      moveTo(100+40*Math.cos(b-.08),100+40*Math.sin(b-.08));
      lineTo(100+r*Math.cos(b),100+r*Math.sin(b));
      lineTo(100+40*Math.cos(b+.08),100+40*Math.sin(b+.08));
      fill();
      }
    var grd = createRadialGradient(105, 85, 8, 100, 90, 25);
    grd.addColorStop(0, '#fE0');
    grd.addColorStop(1, '#FA0');
    fillStyle = grd
    strokeStyle ='#fff';
    beginPath();
    arc(100,100,36,0,6.28,0);
    stroke();
    fill();
    // sourire
    lineWidth=2;
    strokeStyle ='#854';
    beginPath();
    var a=0.285, b=2.855;
    arc(100,105,12,a,b,0);
    stroke();
    beginPath();
    moveTo(100+10*Math.cos(a),105+12*Math.sin(a))
    lineTo(100+14*Math.cos(a),105+18*Math.sin(a))
    moveTo(100+10*Math.cos(b),105+12*Math.sin(b))
    lineTo(100+14*Math.cos(b),105+18*Math.sin(b))
    stroke();
    beginPath();arc(85,95,6,3.54,5.78,0);stroke(); 
    beginPath();arc(115,95,6,3.64,5.88,0);stroke(); 
    }
  o.a+=.005;
  o.b+=.2;

  setTimeout(o.draw,100);
  };o.draw();
    
  return o;
  }

var xSrv9=function(url){
  var o = new XMLHttpRequest();
  o.open('POST',url,true);
  o.setRequestHeader('content-type','application/x-www-form-urlencoded');
  o.fld=[];
  o.add=function(fieldname,fieldvalue){o.fld.push([fieldname,fieldvalue].join('='))};
  o.eChg=function(){};
  o.post=function(url){o.send(o.fld.join('&'));};
  o.onreadystatechange=function(e){if(o.readyState==4){o.value=o.response;o.eChg();}}
  o.value='';
  return o;
  };

function xBal(){
  var o = document.createElement('canvas');o.width=200;o.height=200;o.ctx=o.getContext('2d');
  with(o.ctx) {
    clearRect(0,0,200,200);
    var grd = createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, '#333');
    grd.addColorStop(.5, '#eee');
    grd.addColorStop(1, '#666');
    fillStyle=grd;
    fillRect(60,30,80,120);
    var grd = createLinearGradient(0, 0, 100, 50);
    grd.addColorStop(0, '#222');
    grd.addColorStop(1, '#ddd');
    fillStyle=grd;
    beginPath();
    arc(100,100,80,-3.14/3,-3.14*2/3,1);
    fill();
    beginPath();    
    arc(100,80,80,3.14/3,3.14*2/3,0);
    fill();
    strokeStyle='#fff';
    lineWidth=1;
    fillStyle='#b22';fillRect(80,153,6,10);strokeRect(80,153,6,10);
    fillStyle='#22b';fillRect(117,153,6,10);;strokeRect(117,153,6,10);
    }
  return o;
  }

function xPV(){
  var o = document.createElement('canvas');o.width=200;o.height=200;o.ctx=o.getContext('2d');
  with(o.ctx){
    var grd = createRadialGradient(130, 50, 20, 100, 60, 100);
    grd.addColorStop(0, '#229');
    grd.addColorStop(1, '#004');
    fillStyle=grd;
    fillRect(50,20,100,150)
    strokeStyle='#aaa';
    lineWidth=1;
    for(var y=0;y<11;y++){
      moveTo(50,20+15*y);
      lineTo(150,20+15*y);
      }
    for(var x=0;x<10;x++){
      moveTo(50+10*x,20);
      lineTo(50+10*x,170);
      }
    stroke();
    strokeStyle='#ddd';
    lineWidth=4;
    strokeRect(50,20,100,150);
    }
  sRot(o,[15,-40,0]);
  return o;
  }


function xSnow(){
  var o = new xDiv();
  sOvf(o,'visible');
  o.hmax=scrH();
  o.wmax=scrW();
  o.initPos = function(n){
    n.lev=1+parseInt(Math.random()*8)
    n.xdir=parseInt((Math.random()-.5)*n.lev)
    sPos(n,[Math.random()*o.wmax,0]);
    sSiz(n,[2*n.lev,2*n.lev])
    sBrR(n,[n.lev])
    sBkR(n,[1.4*n.lev,1.41*n.lev],'rgba(250,250,250,'+(1-(n.lev/16))+'),rgba(250,250,250,0) 85%')
    }
  o.p=[]
  for (var i=0;i<99;i++) {
    var f=new xDiv();
    o.initPos(f);
    sPos(f,[Math.random()*o.wmax,Math.random()*o.hmax])
    sPar(f,0)
    o.p.push(f);
    }
  o.eRes = function(){
    o.hmax=scrH();
    o.wmax=scrW();
    for (var i=0;i<o.p.length;i++) {
      o.initPos(o.p[i]);
      sPos(o.p[i],[Math.random()*o.wmax,Math.random()*o.hmax])
      }
    }
  o.m = 0;
  o.anim = function() {
    for (var i=0;i<o.p.length;i++) {
      o.m+=.06;
      var r=0;
      var s=gPos(o.p[i]);
      if (o.p[i].lev>3) {
        r=o.p[i].lev*Math.cos(o.m/2000)/5
        };
      s[0]=s[0]+o.p[i].xdir+r;
      s[1]+=o.p[i].lev;
      sPos(o.p[i],s);
      if (s[1]>o.hmax || s[0]<-10 || s[0]>o.wmax) {o.initPos(o.p[i]);}
      }
    requestAnimationFrame(o.anim);
    }
  o.anim();
  return o;
  }
