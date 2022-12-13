function sBkC(obj,col){
 obj.style.backgroundColor=col;
 };
function gBkC(obj){
 return obj.style.backgroundColor;
 };
function sBkI(obj,src){
 obj.style.backgroundImage="url('"+src+"')";
 };
function gBkI(obj){
 return obj.style.backgroundImage;
 };

function sBkP(obj,t){
 obj.style.backgroundPosition=t[0]+'px '+t[1]+'px';
 };
function gBkP(obj){
 return obj.style.backgroundPosition;
 };
function sBkS(obj,t){
 obj.style.backgroundSize=t[0]+'px '+t[1]+'px';
 };
function gBkS(obj){
 return obj.style.backgroundSize;
 };
function sBkL(obj,angle,text){
 if (window.webkitURL) {
  obj.style.background='-webkit-linear-gradient('+(-angle)+'deg,'+text+')';
  }else{
  obj.style.background='linear-gradient('+(90+angle)+'deg,'+text+')';
  };
 };
function sBkR(obj,tsize,text){
 var s='';if(tsize.length){s=tsize[0]+'px '+tsize[1]+'px,'}
 if (window.webkitURL) {
  obj.style.background='-webkit-radial-gradient(50% 50%,'+s+text+')';
  }else{
  obj.style.background='radial-gradient('+s+text+')';
  };
 };
function sBkN(obj,txt){
 //no-repeat;repeat;repeat-x;repeat-y
 obj.style.backgroundRepeat=txt;
 };
function gBkN(obj){
 return obj.style.backgroundRepeat;
 };
function sBrC(obj,t){
 var s='';
 for (var i=0;i<t.length;i++){s+=(s.length?' ':'')+t[i]};
 obj.style.borderColor=s;
 };
 function gBrC(obj){
 return [obj.style.borderTopColor,obj.style.borderRightColor,obj.style.borderBottomColor,obj.style.borderLeftColor];
 };
function sBrW(obj,t){
 var old_size=gSiz(obj);
 var s='';
 for (var i=0;i<t.length;i++){s+=(s.length?' ':'')+t[i]+'px'}
 if(obj.style.borderStyle==''){obj.style.borderStyle='solid'}
 obj.style.borderWidth=s;
 sSiz(obj,old_size);
 };
function gBrW(obj){
 return [obj.style.borderTopWidth?parseInt(obj.style.borderTopWidth):0,
 obj.style.borderRightWidth?parseInt(obj.style.borderRightWidth):0,
 obj.style.borderBottomWidth?parseInt(obj.style.borderBottomWidth):0,
 obj.style.borderLeftWidth?parseInt(obj.style.borderLeftWidth):0];
 };
function sBrR(obj,t){
 var s='';
 for (var i=0;i<t.length;i++){
  if(i==4){s+=' / '};
  s+=(s.length?' ':'')+t[i]+'px'};
 obj.style.borderRadius=s;
 };
function gBrR(obj){
 return obj.style.borderRadius;
 };
function sPar(obj, parent){
  if(parent==0){document.body.appendChild(obj)}else{
  if (parent==-1) {obj.parentNode.removeChild(obj);obj=undefined;delete obj;}else{parent.appendChild(obj)};
 }};
function gPar(obj){return obj.parentNode};
function sOpa(obj, v){obj.style.opacity=v};
function gOpa(obj){return obj.style.opacity};
function gOvf(obj){return obj.style.overflow};
function sOvf(obj,s){obj.style.overflow=s};
function gOvX(obj){return obj.style.overflowX};
function sOvX(obj,s){obj.style.overflowX=s};
function gOvY(obj){return obj.style.overflowY};
function sOvY(obj,s){obj.style.overflowY=s};
function sPad(obj,t){
 var old_size=gSiz(obj), s='';
 for (var i=0;i<t.length;i++){s+=(s.length?' ':'')+t[i]+'px'};
 obj.style.padding=s;
 sSiz(obj,old_size);
 };
function gPad(obj){
 return [obj.style.paddingTop?parseInt(obj.style.paddingTop):0,
 obj.style.paddingRight?parseInt(obj.style.paddingRight):0,
 obj.style.paddingBottom?parseInt(obj.style.paddingBottom):0,
 obj.style.paddingLeft?parseInt(obj.style.paddingLeft):0];
 };
function sShd(obj,xdir,ydir,size,blur,color,inset){
 obj.style.boxShadow=xdir+'px '+ydir+'px '+blur+'px '+size+'px '+color+(inset==1?' inset ':''); 
 };
function sFoc(o){o.focus()};
function cPar(o){
var p,ps;p=gPar(o);
if (p==document.body) {ps=[window.innerWidth, window.innerHeight]}else{ps=gInS(p)}
var s=gSiz(o);
var x=(ps[0]-s[0])/2,y=(ps[1]-s[1])/2;
sPos(o,[x,y]);
};function isDate(s) {
var d=Date.parse(s);
return !isNaN(d);
};

function isoDate(o) {
var d;
switch (typeof(o)) {
  case 'number':
    o=new Date(1900,0,o-1);
  case 'string':
    if (isDate(o)){d=new Date(o)}else{return ''};
    break;
  case 'object':
    d=o;
    break;
  default:
  return '';
  };
return strNum(d.getFullYear(),4)+'-'+strNum(d.getMonth()+1,2)+'-'+strNum(d.getDate(),2);
};

function isoWeek(o) {
var d;
switch (typeof(o)) {
  case 'number':
    o=new Date(1900,0,o-1);
  case 'string':
    if (isDate(o)){d=new Date(o)}else{return ''};
    break;
  case 'object':
    d=o;
    break;
  default:
  return '';
  };
return strNum(d.getFullYear(),4)+'W'+strNum(weekNum(d),2);
};

function weekNum(s){
if (isDate(s)) {
  var d=new Date(s);
  var M=[0,31,28,31,30,31,30,31,31,30,31,30,31];
  var annee, mois, jour, nbjour, nbsem, i, firstdaynum;
  var nbjour=0;  
  annee=d.getFullYear();
  mois=d.getMonth()+1;
  jour=d.getDate();
  if(annee%4==0){M[2]=29;};
  for (var i=1;i<mois;i++){nbjour+=M[i]};
  nbjour+=jour-1;
  var d1=new Date(annee,0,1);
  firstdaynum=d1.getDay();
  nbjour+=firstdaynum-1;
  if (firstdaynum<5) {nbjour+=7};
  nbsem = parseInt(nbjour / 7);
  if (nbsem==0) {
    if(mois>6){nbsem=53}else{nbsem=1}};
  return nbsem;
  };
};

function dateToXL(d){
  return 25569 + new Date(d).getTime()/86400000;
  }

function dateDiff(d1,d2){
  var x1=new Date(d1).getTime();
  var x2=new Date(d2).getTime();
  return (x2-x1)/86400000;
  }

function dateDiffBus(d1,d2) {
  var one_day=86400000;
  var xd1=new Date(d1), xd2=new Date(d2);
  var day1=xd1.getDay(), day2=xd2.getDay();
  var nd1=parseInt(xd1.getTime()/one_day), nd2=parseInt(xd2.getTime()/one_day);
  if(day1==0){nd1++} else if (nd1==6){day1+=2};
  if(day2==0){nd2++} else if (nd2==6){day2+=2};
  var days = (nd2-nd1)-2*(parseInt((nd2-nd1)/7));
  return days;
  }
function sFtN(obj,font){
 obj.style.font=font;
 };
function gFtN(obj){
 return obj.style.font;
 };
function gFtA(obj){
 return obj.style.textAlign;
 };
function sFtA(obj,s){
 obj.style.textAlign=s;
 };
function sFtC(obj,col){
 obj.style.color=col;
 };
function gFtC(obj){
 return obj.style.color;
 };
function sFtH(obj,n){
 var s='';
 if(isNum(n)){s='px'};
 obj.style.lineHeight=n+s;
 };
function gFtH(obj){
 return parseInt(obj.style.lineHeight);
 };
function sFtZ(obj){
 obj.style.whiteSpace='nowrap';
 };
function gFtZ(obj){
 return (obj.style.whiteSpace=='nowrap');
 };
function sFtL(obj,n){
 obj.style.letterSpacing=n+'px';
 };
function gFtL(obj){
 return obj.style.letterSpacing;
 };
function sFtW(obj,n){
 obj.style.wordSpacing=n+'px';
 };
function gFtW(obj){
 return obj.style.wordSpacing;
 };

function includeFont(name, url, format){
    var s = document.createElement('style');
    s.innerHTML = "@font-face { font-family: '" + name + "'; src: url('" + url + "') format('" + format + "');}"
    document.head.appendChild(s);
    };
includeFont('fnt1', 'js/fnt1.ttf', 'truetype');
function dRfh(){window.location.reload()};
//document.location.href+=''

function dw(url){document.location.href=url;};

function httpGet(url) {
  var o = new XMLHttpRequest();
  o.open("GET", url, false);
  o.send(null);
  return o.responseText;
  };
function httpPost(url) {
  var o = new XMLHttpRequest();
  o.open("GET", url, false);
  o.send(null);
  return o.responseText;
    var formData=new FormData();
    formData.append('cmd','upload');
    formData.append('p',path.value);
    formData.append('file',f.files[0],f.files[0].name);
    var o = new XMLHttpRequest();
    o.open("POST", 'explore.exe', false);
    o.send(formData);
  };
function MobileType(){
var isMobile = { 
Android: function() { return navigator.userAgent.match(/Android/i); }, 
BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
Windows: function() { return navigator.userAgent.match(/IEMobile/i); }, 
any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
return isMobile.any();
};

function isMobile(){
 return MobileType()?true:false;
 };

function loadScript(src){
 var js = document.createElement('script');
 js.type='text/javascript';
 js.src=src;
 document.head.appendChild(js);
 };

function sIco(url){
var l=document.createElement('link');
l.type='image/x-icon';l.rel='shortcut icon';l.href=url;
document.head.appendChild(l);};function sNoS(obj){
 obj.onselectstart=function(){return false};
 obj.style.webkitUserSelect="none";
 obj.style.MozUserSelect="none";
 };
function sYeS(obj){
 obj.onselectstart=null;
 obj.style.webkitUserSelect="all";
 obj.style.MozUserSelect="all";
 };
function sMoP(obj,s){obj.style.cursor=s};
function sThS(obj,fct){
if (isMobile()) {
 if(fct==''){}else{obj.addEventListener('touchstart', fct, false)};
 }else{
 if(fct==''){obj.onmousedown=''}else{obj.onmousedown=fct};
 };
};
function sThE(obj,fct){
if (isMobile()) {
 if(fct==''){}else{obj.addEventListener('touchend', fct, false)};
 }else{
 if(fct==''){obj.onmouseup=''}else{obj.onmouseup=fct};
 };
};
function isNum(n){return !isNaN(n)};
function rnd() {var a=Math.random();return a};
function rndI(v) {var a=parseInt(Math.random()*v);return a};
function strNum(n,car){
 var a='';
 for(var i=0;i<(car-n.toString().length);i++){a+='0'};
 var b=a+n;
 return b};
function fmtCur(num) {
 var a=parseFloat(num).toFixed(2);
 return a.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
};function scrW(){return window.innerWidth}
function scrH(){return window.innerHeight}
function cScr(o){
var s=gSiz(o);
var x=(scrW()-s[0])/2,y=(scrH()-s[1])/2;
sPos(o,[x,y]);
};

function sInS(obj,t){
 var tbor=gBrW(obj);
 var tpad=gPad(obj);
 if(t[1]) {obj.style.width=t[0]+'px'};
 if(t[1]) {obj.style.height=t[1]+'px'};
 };
function gInS(obj){
 return [obj.style.width?parseInt(obj.style.width):0,obj.style.height?parseInt(obj.style.height):0];
 };
function sPos(obj,t){
 if(obj.style.position != 'absolute'){obj.style.position='absolute'};
 obj.style.left=t[0]+'px';
 obj.style.top=t[1]+'px';
 };
function gPos(obj){
 return [obj.style.left ? parseInt(obj.style.left) : 0,obj.style.top?parseInt(obj.style.top):0];
 };
function sSiz(obj,t){
//var tbor=gBrW(obj);
//var tpad=gPad(obj);
//obj.style.width=t[0]-tbor[3]-tbor[1]-tpad[3]-tpad[1]+'px';
//obj.style.height=t[1]-tbor[0]-tbor[2]-tpad[0]-tpad[2]+'px';
obj.style.width=t[0]+'px';
obj.style.height=t[1]+'px';
if (typeof obj.eRes == 'function') {obj.eRes()};
 };
function gSiz(obj){
//var tbor=gBrW(obj);
//var tpad=gPad(obj);
//return [obj.style.width?parseInt(obj.style.width)+tbor[3]+tbor[1]+tpad[3]+tpad[1]:0,obj.style.height?parseInt(obj.style.height)+tbor[0]+tbor[2]+tpad[0]+tpad[2]:0];
return [obj.style.width?parseInt(obj.style.width):0,obj.style.height?parseInt(obj.style.height):0];
 };
function move(o,t){
  if(o.style.position != 'absolute'){o.style.position='absolute'};
  o.style.left=t[0]+'px';
  o.style.top=t[1]+'px';
  o.style.width=t[2]+'px';
  o.style.height=t[3]+'px';
  if (typeof o.eRes == 'function') {o.eRes()};
  }

function sVis(obj, v){
 obj.style.display=(v==false?'none':'');
 };
function gVis(obj){
 return obj.style.display=='none'? false: true;
 };
function texW(obj,text) {
 var ctx=document.createElement('canvas').getContext('2d');
 ctx.font=obj.style.font;
 var l=ctx.measureText(text).width;
 return l;
 };
function xMsg(msg,tit) {
  var y=msg.split('\n').length*14;
  if(y>220){y=220};
  var o=new xDiv();
  var b=new xBtn();sTxt(b,'OK');sPar(b,o);
  var p=o.appendChild(document.createElement('pre'))
  sOvY(p,'auto');
  o.eRes=function(){var s=gInS(o);move(p,[0,5,s[0],s[1]-50]);move(b,[s[0]/2-40,s[1]-20,80,20])};
  sSiz(o,[500,80+y]);sBrW(o,[3]);sBrR(o,[12]);sBrC(o,['#eee','#ddd','#ddd','#eee']);
  sBkC(o,'#d5d5d5');sFtA(o,'left');sFtA(p,'center');sPad(o,[5]);sPad(p,[10]);
  if(!tit){tit='MESSAGE'};sTxt(o,tit);sTxt(p,msg);
  sFtN(o,'bold 14px/14px courier new');sFtC(o,'#000');
  sFtN(p,'14px/14px courier new');sFtC(p,'#000');
  sPar(o,0);cScr(o);
  b.eClk=function (){sPar(o,-1);o=0};
  }
function gTxt(obj){
 for(var i=0;i<obj.childNodes.length;i++){
  if(obj.childNodes[i].nodeType==3){return obj.childNodes[i].nodeValue};
  };
 };
function sTxt(obj,text){
 for(var i=0;i<obj.childNodes.length;i++){
  if(obj.childNodes[i].nodeType==3){obj.childNodes[i].nodeValue=text;return 0;};
  };
 obj.appendChild(document.createTextNode(text));
 };

function aTxt(obj,text){
 obj.appendChild(document.createElement('br'));
 obj.appendChild(document.createTextNode(text));
 };

function sTxS(obj,xdir,ydir,blur,color){
 obj.style.textShadow=xdir+'px '+ydir+'px '+blur+'px '+color; 
 };

function sTxS(obj,xdir,ydir,blur,color){
 obj.style.textShadow=xdir+'px '+ydir+'px '+blur+'px '+color; 
 };function sRot(obj,r){
 var x=(obj.rotx?obj.rotx:0)+r[0];
 var y=(obj.roty?obj.roty:0)+r[1];
 var z=(obj.rotz?obj.rotz:0)+r[2];
 sTrs(obj,'perspective(500px) rotateZ('+z+'deg) rotateY('+y+'deg) rotateX('+x+'deg)');
 obj.rotx=x;obj.roty=y;obj.rotz=z;
 };

function sTrs(obj,text) {
 if (window.webkitURL) {obj.style.webkitTransform=text;}
 else{obj.style.transform=text;}
 };
function gTrs(obj){
 if (window.webkitURL) {return obj.style.webkitTransform}
 else {return obj.style.transform}
 };
function sTrO(obj,t) {
 var s='';
 for (var i=0;i<t.length;i++){s+=(s.length?' ':'')+t[i]+'px';}
 if (window.webkitURL) {obj.style.webkitTransformOrigin=s;}
 else{obj.style.transformOrigin=s;};
 };
function gTrO(obj){
  if (window.webkitURL) {return obj.style.webkitTransformOrigin}
  else {return obj.style.transformOrigin};
  };
function sTrx(obj,text){
 if (window.webkitURL) {obj.style.webkitTransition=text;}
 else{obj.style.transition=text;};
 };
function vectDownArrow(){
var o=document.createElement('canvas');
o.ctx=o.getContext('2d');
o.eRes=function(){
  var s=gSiz(o);
  o.width=s[0];o.height=s[1];
  with (o.ctx) {
    clearRect(0,0,s[0],s[1]);
    strokeStyle='#eee';
    fillStyle='rgba(100,100,100,.9)';
    beginPath();
    moveTo(0.7*s[0],0);
    lineTo(0.7*s[0],0.5*s[1]);
    lineTo(s[0],0.5*s[1]);
    lineTo(.5*s[0],s[1]);
    lineTo(0,0.5*s[1]);
    lineTo(0.3*s[0],0.5*s[1]);
    lineTo(0.3*s[0],0);
    closePath();
    stroke();fill(); };
  };
return o;
};
function vectCalendar(){
var o=document.createElement('canvas');
o.ctx=o.getContext('2d');
o.eRes=function(){
  var s=gSiz(o);
  o.width=s[0];o.height=s[1];
  with (o.ctx) {
    fillStyle='#65d';
    fillRect(0,0,s[0],s[1]);
    fillStyle='#fff';
    fillRect(s[0]*.1,s[1]*.25,s[0]*.8,s[1]*.65);
    fillStyle='#dde';
    for (var x=0;x<4;x++) {
      for (var y=0;y<3;y++) {
        fillRect(s[0]*.15+x*(s[0]*.2),s[1]*.33+y*(s[1]*.2),s[0]*.1,s[1]*.1);
        };
      };
    fillStyle='#65d';
    beginPath();
    moveTo(s[0]*.55,s[1]*.6);
    lineTo(s[0]*.85,s[1]*.6);
    lineTo(s[0]*.7,s[1]*.85);
    closePath();
    fill();
    };
  };
return o;
};

function resBtn() {
var o=new xDiv();sOvf(o,'hidden');sMoP(o,'pointer');sPar(o,0);
var l=[];for(var i = 0; i<3; i++) {l.push(new xDiv());
sBkC(l[i],'#bbb');sRot(l[i],[0,0,-45]);sPar(l[i],o);}
o.eRes=function() {var w=gSiz(o)[0], h=gSiz(o)[1];
for(var i = 0; i<3; i++) {move(l[i], [h*(-.5+.2*i),h*(.5+.2*i),w*2,h*.15]);}}
return o;}
function xBtn(){
    var o = new xDiv();
    o.bold=0;
    sFtA(o,'center');
    sTxS(o,1,1,1,'#eee');
    sBrW(o,[1]); sBrR(o,[3]);
    sShd(o,1,1,0,8,'rgba(100,100,100,.2)');
    sNoS(o); sMoP(o,'pointer'); 
    o.eClk = function(){};
    o.c=0;
    o.draw = function () {
        o.eRes = null;
        var h = gSiz(o)[1];
        sFtN(o, (o.bold ? 'bold ' : '') + h * 0.6 + 'px/' + (h*.95) + 'px fnt1');
        if(o.c) {
            sFtC(o,'#666');
            sPad(o,[1,0,0,0]);
            sBrC(o,['#999']);
            sBkL(o, 90, '#ccc 10%, #ddd 30%');
            } else {
            sFtC(o,'#222');
            sPad(o,[0]);
            sBrC(o,['#bbb']);
            sBkL(o, 90, '#eee 10%, #ccc 50%');
            }
        o.eRes = o.draw;
        }
    sThS(o,function(evt){o.c=1;o.draw();});
    sThE(o, function(evt){if(o.c) {o.c=0;o.draw();o.eClk();}else{o.draw();}});
    o.onmouseleave=function () {o.c=0;o.draw();} 
    o.tabIndex = 0;
    o.draw();
    return o;
    };
function xCan() {
 var o=document.createElement('canvas');
 o.ctx=o.getContext('2d');
 o.eRes=function(){var s=gSiz(o); o.width=s[0];o.height=s[1];};
 return o;
 };
function xCbx() {
  var xval=0;
  var o=new xDiv();
  move(o,[0,0,20,20]);
  sOvf(o,'hidden');
  sBrW(o,[1]);
  sBrC(o,['#aaa']);
  sBkL(o,60,'#ddd 10%, #eee 60%');
  sShd(o,1,1,0,8,'rgba(100,100,100,.3)');
  var b=new xDiv();
  var c1=new xDiv(); sBkC(c1,'#555'); sRot(c1,[0,0,45]);
  var c2=new xDiv(); sBkC(c2,'#555'); sRot(c2,[0,0,-45]);
  o.eRes=function(){
    var w=gInS(o)[1];
    sSiz(b,[w,w]);
    sBrR(o,[w/3]);
    sSiz(c1,[w*0.8,w/6]);
    sPos(c1,[w*0.1,(w-(w/6))/2]);
    sBrR(c1,[w/10]);
    sSiz(c2,[w*0.8,w/6]);
    sPos(c2,[w*0.1,(w-(w/6))/2]);
    sBrR(c2,[w/10]);
    };
  o.eRes();
  sOpa(c1,0);sOpa(c2,0);
  Object.defineProperty(o, "value", { 
    get: function () {return xval},
    set: function (i) {xval=i; sOpa(c1,xval);sOpa(c2,xval)} });
  o.eChg=function(){};
  o.swap=function(){o.value=xval?0:1; o.eChg()};
  b.onclick=o.swap;
  sMoP(b,'pointer');
  sTrx(c1,'opacity .2s ease-out');sTrx(c2,'opacity .2s ease-out');
  sPar(b,o);
  sPar(c1,b);
  sPar(c2,b);
  return o };
function xCmb(){
 var down=0;
 var o=new xDiv();
   sPos(o,[0,0]);
   sSiz(o,[200,30]);
   sFtN(o,'14px calibri');
  var oldValue='';
  o.maxLines=12;
  o.items=[];
  o.clear=function(){
    for(var n=0; n<o.items.length;n++) {sPar(o.items[n],undefined) };
    o.items=[]; 
    };
  o.add=function(txt){
    var i=new xDiv(); sTxt(i,txt); sFtA(i,'left'); sPar(i,pg);
    drawItem(o.items.length,i);
    o.items.push(i);
    sMoP(i,'pointer');
    i.onmouseenter=function(){sBkC(i,'rgba(200,200,200,.3)')};
    i.onmouseleave=function(){sBkC(i,'')};
    i.onclick=function(){o.value=gTxt(i);p.eClk()};
    };
  function drawItem(n,i){
    var s=gInS(t);
    sPos(i,[0,(n)*s[1]]);
    sFtN(i,gFtN(t));
    sPad(i,[0,0,0,5]);
    sSiz(i,[gInS(pg)[0],s[1]]);
    }
 var t=new xTbx();
   sPos(t,[0,0]);
   sPar(t,o);
 var p=new xBtn();
   var img=new vectDownArrow();
   sTrx(img,'all .5s ease .1s');
   sPar(img,p);
   sPar(p,o);
   p.eClk=function(){
     switch (down) {
     case 0:     
       var lines=o.items.length;
       if (lines<1) {lines=1;};
       if (lines>o.maxLines) {lines=o.maxLines;sOvY(pg,'auto')};
       var h=2+gInS(t)[1]*lines;
       pg.style.zIndex=100;
       sRot(img,[0,0,90]);
       down=1;
       break;
     case 1:
       sOvY(pg,'hidden');
       h=2;
       sRot(img,[0,0,-90]);
       down=0;
       break;
       };
     sSiz(pg,[gSiz(t)[0],h]);
     sOpa(pg,down-.05);
     };
  p.tabIndex=0;
  t.tabIndex=0;
  p.onfocus=function(){activObj=o;if(oldValue==''){oldValue=o.value};};
  t.onfocus=p.onfocus;

  function testblur(){
    activObj=null;
    setTimeout(function(){
    var c=activObj;
    if (!(c==o)){
      if(down==1){p.eClk()};
      //if(oldValue!=o.value) {o.eChg();oldValue=''};
      if(oldValue!=o.value) {oldValue=''};
      };
    },20);
    };
  p.onblur=testblur;
  t.onblur=p.onblur;
 var pg=new xDiv(); sPar(pg,o);
  sBrW(pg,[1]);
  sOpa(pg,0);
  sBrC(pg,['#bbb']);
  sBkC(pg,'rgba(255,255,255,0.9)');
  sBrR(pg,[5]);
  sTrx(pg,'all .4s ease');
  sOvX(pg,'hidden');
  sOvY(pg,'hidden');
  pg.tabIndex=0;
  pg.scrolled=0
  sThS(pg,function(){pg.scrolled=0;p.onblur=function(){}});
  pg.addEventListener('scroll', function(){pg.scrolled=1}, false)
  sThE(pg,function(){if(pg.scrolled==0){p.onblur=testblur;if(document.activeElement==pg){testblur()}}});
 o.eRes=function(){
  s=gSiz(o);
  move(t,[0,0,s[0]-s[1]-2,s[1]]);
  move(p,[s[0]-s[1],0,s[1],s[1]]);
  move(img,[s[1]*.25,s[1]*.25,s[1]*.5,s[1]*.5]);
  sBrR(p,[s[1]/6]);
  sPos(pg,[0,s[1]+2]);
  sSiz(pg,[gSiz(t)[0],2]);
  for (var n=0;n<o.items.length;n++){drawItem(n,o.items[n])};
  };
 o.eRes();
 o.eChg=function(){};
 Object.defineProperty(o, "value", { 
   get: function () {return t.value},
   set: function (s) {t.value=s;o.eChg()}
   });
 return o;
};function xDat(){
 var down=0;
 var yy=0,mm=0,h5,h6;
 var arrayMonth=['January','February','March','April','May','June','July','August','September','October','November','December'];
 var arrayDay=['Mon','Tue','Wed','Thu','Fri','Sat','Sun','w'];
 var today;
 var colActiveBorder=['#aaa']; var colActiveFnt='#000';
 var colLockedBorder=['#ddd']; var colLockedFnt='#ddd';
 var colBack='#eee';
 var colBk='#fdfdfd';
 var colBkWEnd='#f6f6f6';
 var colWkBrd=['#ccc'];
 var colWkBck='#e5e5e5';
 var colToday='#bfb';
 var colSel='#ffffc0';
 var o=new xDiv();
   sPos(o,[0,0]);
   o.minDate=new Date(1000,0,1);
   o.maxDate=new Date(3000,0,1);
   o.oldValue=undefined;
 var t=new xTbx();
   sPos(t,[0,0]);
   sPar(t,o);
 var p=new xBtn();
    var img=new vectCalendar();
    sPar(img,p);
    sPar(p,o);
    p.eClk=function(){
      switch (down) {
      case 0:
      pg.style.zIndex=100;
      down=1;
      break;
      case 1:
      down=0;
      break;
      };
      Populate();};
 var pg=new xDiv();
 sPar(pg,o);
  var bPrevM=new xBtn();sPar(bPrevM,pg);sTxt(bPrevM,"<");
  bPrevM.eClk=function(){
    if (new Date(yy,mm,0)>=o.minDate){mm--;if(mm==-1){mm=11;yy--;};Populate();}};
  var bNextM=new xBtn();sPar(bNextM,pg);sTxt(bNextM,">");
  bNextM.eClk=function(){
    if (new Date(yy,mm+1,0)<=o.maxDate) {mm++;if(mm==12){mm=0;yy++;};Populate();};
    };
  var mTitle=new xDiv();sPar(mTitle,pg);//sTxt(mTitle,"2015 - MAY");
  sFtA(mTitle,'center');
  sBrW(pg,[1]);sBrC(pg,['#bbb']);
  sBkC(pg,colBack);
  sShd(pg,1,1,0,10,'rgba(100,100,100,.3)');
  sOvf(pg,'hidden');
  sMoP(pg,'default');
  sTrx(pg,'all .3s ease');
  p.tabIndex=0;
  p.onfocus=function(){activObj=o;if(!o.oldValue){o.oldValue=o.value;};};
  t.tabIndex=0;
  t.onfocus=p.onfocus;

  function testblur(){
    activObj=null
    setTimeout(function(){
    var c=activObj;
    if (!(c==o)){
      if(down==1){p.eClk()};
      var s=isoDate(t.value);
      if (isoDate(s)>=isoDate(o.minDate) && isoDate(s)<=isoDate(o.maxDate)) {t.value=s}else{t.value=''}
      if(o.oldValue!=o.value) {o.eChg();o.oldValue=undefined;};
      };
    },20);
    };
  p.onblur=testblur;
  t.onblur=p.onblur;
  t.onkeyup=function(){yy=0;Populate();};
  sThS(pg,function(){p.onblur=function(){}});
  sThE(pg,function(){p.onblur=testblur;if(document.activeElement==pg){testblur()}});

  var head=[];
  for (var i=0;i<8;i++) {
    head[i]=new xDiv();sPar(head[i],pg);
    sBrW(head[i],[0,0,1,0]);
    sBrC(head[i],colActiveBorder);
    sFtC(head[i],'#666');
    sTxS(head[i],1,1,2,'#ffd');
    sFtA(head[i],'center');
    sTxt(head[i],arrayDay[i]);
    };
  var day=[];
  for (var i=0;i<42;i++) {
    day[i]=new xDiv();sPar(day[i],pg);
    sBrW(day[i],[1]);
    sFtA(day[i],'center');
    };
  var wk=[];
  for (var i=0;i<6;i++) {
    wk[i]=new xDiv();sPar(wk[i],pg);
    sBrW(wk[i],[1]);
    sBrC(wk[i],colWkBrd);
    sBkC(wk[i],colWkBck);
    sFtA(wk[i],'center');
    sFtC(wk[i],'#554');
    sTxS(wk[i],1,1,2,'#ffd');
    };
 o.eRes=function(){
   s=gSiz(o);
   var dec=s[1]*.025;
   var dy=s[1]*1.01, dx=dy*1.25;
   var fnt=dy*.5+"px/"+dy*.8+"px calibri";
   var pgX=s[0]-(dx*8); if (pgX<0) {pgX=0};
   move(t,[0,0,s[0]-s[1]-dec,s[1]]);
   move(p,[s[0]-s[1],0,s[1],s[1]]);
   move(img,[s[1]*.25,s[1]*.25,s[1]*.5,s[1]*.5]);
   sBrR(p,[s[1]/6]);
   sPos(pg,[pgX,s[1]+2]);
   h5=[dx*8,dy*7+dec];   h6=[dx*8,dy*8+dec];
   sPos(bPrevM,[dec,dec]);
   sSiz(bPrevM,[dx*.9,dy*.9]);
   sPos(mTitle,[dec+dx,dec]);
   sSiz(mTitle,[dx*5.9,dy*.9]);
   sFtN(mTitle,'bold '+fnt);
   sPos(bNextM,[dec+dx*7,dec]);
   sSiz(bNextM,[dx*.9,dy*.9]);
  for (var i=0;i<8;i++) {
    sPos(head[i],[dec+dx*i,dec+dy]);
    sSiz(head[i],[dx*.9,dy*.9]);
    sFtN(head[i],fnt);
    };
  for (var i=0;i<42;i++) {
    sPos(day[i],[dec+dx*(i%7),dec+dy*(2+parseInt(i/7))]);
    sSiz(day[i],[dx*.9,dy*.9]);
    sBrR(day[i],[dy/6]);
    sFtN(day[i],fnt);
    };
  for (var i=0;i<6;i++) {
    sPos(wk[i],[dec+dx*7,dec+dy*(2+i)]);
    sSiz(wk[i],[dx*.9,dy*.9]);
    sBrR(wk[i],[dy/2]);
    sFtN(wk[i],fnt);
    };
   };o.eRes();
  function Populate(){
   switch (down) {
   case 0:
    sOpa(pg,0);
    sSiz(pg,[h5[0],2]);
    break;
   case 1:
    sOpa(pg,1);
    if (isDate(o.value)) {today=new Date(o.value)}else{today=new Date()};
    if(yy==0) {
      yy=today.getFullYear(today);
      mm=today.getMonth();
      }
    sTxt(mTitle,yy+' - '+arrayMonth[mm].toUpperCase());
    var monthDayOne=new Date(yy,mm,1);
    var monthDayLast=new Date(yy,mm+1,0);
    var D1Num=monthDayOne.getDay()-1;if(D1Num<0){D1Num=6};
    var D2Num=D1Num+monthDayLast.getDate();
    var s=gSiz(pg);
    if (D2Num>35){sSiz(pg,h6)}else{sSiz(pg,h5)};
    function lockCell(i) {
      sBrC(day[i],colLockedBorder);
      sBkC(day[i],'');
      sTxt(day[i],'');
      day[i].onclick='';
      day[i].onmouseenter='';day[i].onmouseleave='';
      }
    for (var i=0;i<6;i++){sTxt(wk[i],'')};
    for (var i=0;i<D1Num;i++){
      lockCell(i);
      }
    for (var i=D1Num;i<D2Num;i++){
      var dtest=new Date(yy,mm,i+1-D1Num);
      var valid=(o.minDate<=dtest)?true:false;
          valid=valid && (dtest<=o.maxDate)?true:false;
      if ((i%7)>4) {day[i].stdBk=colBkWEnd}else{day[i].stdBk=colBk};
      sBkC(day[i],day[i].stdBk);
      sTxt(day[i],i+1-D1Num);
      if (valid) {
        sFtC(day[i],colActiveFnt);
        sBrC(day[i],colActiveBorder);
        day[i].onclick=function(){o.value=isoDate(new Date(yy,mm,gTxt(this)));p.eClk()};        
        if(isoDate(dtest)==isoDate(today)){day[i].stdBk=colToday;sBkC(day[i],colToday)};
        day[i].onmouseenter=function(){sBkC(this,colSel)};
        day[i].onmouseleave=function(){sBkC(this,this.stdBk)};
        if (gTxt(wk[parseInt(i/7)])=='') {sTxt(wk[parseInt(i/7)],weekNum(dtest))};
      }else{
        sFtC(day[i],colLockedFnt);
        sBrC(day[i],colLockedBorder);
        day[i].onclick='';
        day[i].onmouseenter='';day[i].onmouseleave='';
        }
      }
    for (var i=D2Num;i<42;i++){
      lockCell(i);
      }; 
    break;
    };
  }; Populate();
 Object.defineProperty(o, "value", { 
   get: function () {return t.value},
   set: function (s) {
   t.value=s;if(t.value!=o.oldValue){o.eChg();o.oldValue=undefined;}}
   });
 o.eChg=function(){};
 return o;
};

function xDiv() {
 var o = document.createElement('div');
 o.style.position='absolute';
 o.style.boxSizing='border-box';
 return o;
 };
function xtFragment(){
 return document.createDocumentFragment();
 };
function xFil(){
  var o=new xDiv();
  sBkC(o,'#fff');sPad(o,[0,5]);sBrW(o,[1]);sBrR(o,[5]);sBrC(o,['#999']);
  sShd(o,1,1,0,8,'rgba(100,100,100,.2)');
  var f=new xTbx();f.type='file';
    sVis(f, false);move(f,[0,0,1,1]);sPar(f,o);
    f.onchange=function(){sTxt(o,f.files[0].name);o.eChg()};
  var b=new xBtn();sTxt(b,'...');sPar(b,o);
  o.eChg=function(){};
  o.eRes=function(){
    var h=gInS(o)[1];
    sFtN(o,h*.8+'px/'+(h-1)+'px calibri');
    var s=gSiz(o); 
    move(b,[s[0]+(0*s[1]),-1,s[1],s[1]]);
    };
  b.eClk=function(){f.click()};
  Object.defineProperty(o, "file", { 
    get: function () {return f.files[0]}
    });
  Object.defineProperty(o, "filename", { 
    get: function () {return f.files[0].name}
    });
  return o;
  };
global_z_index=0;
function bringToFront() {
    global_z_index++;
    this.style.zIndex = global_z_index;
    }

function xFrm() {
  var win = new xDiv();
   sThS(win,bringToFront);
   global_z_index++;
   win.style.zIndex = global_z_index;
   sPos(win,[0,0]);
   sSiz(win,[320,240]);
   sBrR(win,[4]);
   sShd(win,2,2,0,15, 'rgba(110,110,110,.4)');
  var titlebar = new xDiv();
   sPos(titlebar,[0,0]);
   sBrW(titlebar,[2]);
   sBrR(titlebar,[4,4,0,0]);
   sBrC(titlebar,['#788']);
   sBkL(titlebar,80,'#f0f0f0,#ddd');
   sFtN(titlebar,'14px/22px fnt1');
   sFtA(titlebar,'left');
   sFtC(titlebar,'#334');
   sPad(titlebar,[0,0,0,22]);
   sNoS(titlebar);
   sMoP(titlebar,'default');
   sPar(titlebar,win);
   var ico = new xImg();
     move(ico,[3,3,16,16]);
     sMoP(ico,'default');sNoS(ico);
     sPar(ico, titlebar);
    ico.onmousedown = titlebar.onmousedown
  var closebtn = new xBtn();
   sFtN(closebtn,'bold 16px fnt1');
   sTxt(closebtn,'X');
   move(closebtn,[gSiz(titlebar)[0]-25,1,20,19]);
   sBkL(closebtn,80,'#e68,#842');
   sBrR(closebtn,[4]);
   sFtA(closebtn,'center');
   sFtC(closebtn,'#fff');
   sNoS(closebtn);
   sMoP(closebtn,'pointer');
   sPar(closebtn,titlebar);
  var body = new xDiv();
   sPos(body,[0,25]);
   sBrW(body,[0,2,2,2]);
   sBrC(body,['#888']);
   sBrR(body,[0,0,4,4]);
   sBkC(body,'#e5e5e8');
   sOvf(body,'auto');
   sPar(body,win);
  var fsz = new resBtn();
    sSiz(fsz, [16,16]);
    sPar(fsz, body);
    sMoP(fsz, 'nw-resize');
  win.eRes=function(){
   sSiz(titlebar,[gInS(win)[0],25]);
   move(closebtn,[gSiz(titlebar)[0]-25,1,20,19]);
   sSiz(body,[gInS(win)[0],gInS(win)[1]-25]);
   sPos(fsz, [gInS(body)[0]-22,gInS(body)[1]-20]);
   };
    titlebar.onmousedown = function(e) { 
      if (e.which==1) {
        titlebar.style.cursor='move';
        x0 = e.pageX; y0 = e.pageY;
        document.onmousemove = function(e) {
          win.style.left = parseInt(win.style.left) + (e.pageX-x0) + 'px';
          win.style.top = parseInt(win.style.top) + (e.pageY-y0) + 'px';
          x0 = e.pageX; y0 = e.pageY;
          };
        document.onmouseup = function() {titlebar.style.cursor='default'; document.onmousemove='';document.onmouseup=''};
        };
      };
    fsz.onmousedown = function(e) { 
      sNoS(document.body);
      if (e.which==1) {
        x0 = e.pageX; y0 = e.pageY;
        document.onmousemove = function(e) {
          sSiz(win,[gSiz(win)[0]+(e.pageX-x0), gSiz(win)[1]+e.pageY-y0]);
          win.eRes();
          x0 = e.pageX; y0 = e.pageY;
          };
        document.onmouseup = function() {document.onmousemove='';document.onmouseup='';sYeS(document.body);};
        };
      };
  win.disableClose = function() {sPar(closebtn,-1)};
  win.titlebar=titlebar;
  win.ico=ico;
  win.closebtn=closebtn;
  win.body=body;
  win.eRes();
  return win;
  };function xHgl(){
var o=new xDiv();sSiz(o,[100,100]);cScr(o);sBrR(o,[50]);sBrW(o,[0]);sTrO(o,[50,50]);
for(var i=0;i<360;i+=30){
 var r=new xDiv();sSiz(r,[15,7]);sBkC(r,'#556');sPos(r,[70,47]);sTrO(r,[-20,3]);sRot(r,[0,0,i]);
 sBrR(r,[4]);if(i % 90){sSiz(r,[17,7])};sPar(r,o);
 var c=parseInt(200-(i*.7));sBkC(r,'rgba('+(c)+','+(c)+','+(c)+',0.5)');
 };
o.rot=function(){
 sRot(o,[0,0,30]);sRot(o,[0,0,-2]);
 setTimeout(o.rot,80);
 };
o.rot();
return o
};
function xImg(){
 var o=document.createElement('img');
 o.setAttribute('draggable', false);
 sMoP(o,'pointer');
 o.eClk=function(){};
 sThE(o,function(){o.eClk()});
 return o;
 };
function xInc() {
var o=new xDiv();
  o.style.position='absolute';
  sSiz(o,[120,30]);
  sBrW(o,[0]);
  o.min=0;o.max=99;
var m=new xBtn();
  sTxt(m,'-');
  sPad(m,[0,0,0,5]);
  sPar(m,o);
var p=new xBtn();
  sTxt(p,'+');
  sPar(p,o);
var v=new xTbx();
  v.value=0;
  sFtA(v,'center');
  sSiz(v,[30,24]);
  sBrR(v,[0]);
  sShd(v,1,1,0,10,'rgba(100,100,100,.3)');
  v.onchange=function(){
    if (o.value<o.min) {v.value=o.min};
    if (o.value>o.max) {v.value=o.max};
    o.eChg()};
  sPar(v,o);
o.eRes=function(){
  s=gInS(o);
  sPos(m,[0,0]);
  sSiz(m,[s[0]*.28,s[1]]);
  sBrR(m,[s[1]/2,0,0,s[1]/2]);
  sPos(v,[s[0]*.3,0]);
  sSiz(v,[s[0]*.3,s[1]]);
  sPos(p,[s[0]*.62,0]);
  sSiz(p,[s[0]*.28,s[1]]);
  sBrR(p,[0,s[1]/2,s[1]/2,0]);
  };
  o.eRes();
Object.defineProperty(o, "value", { 
  get: function () {return v.value*1},
  set: function (s) {v.value=s;o.eChg()}
  });
 m.eClk=function(){if (o.value>o.min) {o.value-=1}};
 p.eClk=function(){if (o.value<o.max) {o.value+=1}};
 o.eChg=function(){};
 //o.value=v; 
return o;
};
function xLab() {
 var o = new xDiv();
 sNoS(o); sMoP(o,'default');
 o.eRes=function(){
    var h=gSiz(o)[1]-2;
    sFtN(o,h*0.7+'px/'+h+'px fnt1');
    };
 o.eRes();
 return o;
 };
function xLng() {
 var o=new xDiv();
 var a=0;
 sBrW(o,[1,0,0,0]);
 sTrO(o,[0,0]);
 o.draw=function(p){
  sRot(o,[0,0,-a]);
  var x=p[2]-p[0], y=p[3]-p[1];
  var w=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
  move(o,[p[0],p[1],w,0]);
  a=Math.atan(y/x)*180/3.141592653;
  if (x<0){a+=180}
  sRot(o,[0,0,a]);
  }
 return o;
 }
function xLnk() {
 var o = document.createElement('a');
 o.target = '_blank'
 o.style.position='absolute';
 o.style.boxSizing='border-box';
 o.eRes=function(){var h=gInS(o)[1];sFtN(o,(h*.88)+'px/'+(h-2)+'px calibri')};
 o.eRes();
 return o;
 };function xMnu(){
 var guispd=400;
 var xdir=0;
 var o=new xDiv();
 o.dn=0;
 o.btn=new xBtn();sFtC(o.btn,'#048');
 o.ismnu=2;o.btn.ismnu=1;
 o.frm=new xDiv();sTrx(o.frm,'opacity '+guispd+'ms');sVis(o.frm,0);
 sSiz(o.frm,[10,10]);
 var t=new xTri();t.col='#999';sSiz(t,[10,10]);
 var trot=0;
 o.eRes=function(){
  var s=gSiz(o);sSiz(o.btn,s);sPos(t,[s[0]-s[1]/2-1,s[1]/2-5]);
     if(xdir==0){
       move(o.frm,[0,gSiz(o)[1]+3,10,10]);
       sRot(t,[0,0,-trot]);trot=180;sRot(t,[0,0,trot]);
       }else{
       move(o.frm,[gSiz(o)[0]+3,0,10,10]);
       sRot(t,[0,0,-trot]);trot=90;sRot(t,[0,0,trot]);
       };
  };
 Object.defineProperty(o, "dir", { 
   set: function (s) {xdir=s;o.eRes()}
   });
 o.btn.onfocus=function(){activObj=o;}
 function blurtest(){
   activObj=document.body;
   setTimeout(function(){
   var c;
   var needclose=true
   c=activObj;
   while(c){if(c==o){needclose=false;break;}c=gPar(c);}
   if(needclose){
     c=o;
     while(c){if(c.ismnu==2 && c!=gPar(gPar(activObj))){c.dn=1;c.btn.eClk()}c=gPar(c);}
     }
  },20)}
 o.btn.onblur=blurtest;
 o.btn.eClk=function(){
  o.style.zIndex=100;
  if(o.dn==0){
    o.dn=1;
    sTrx(o.frm,'');sVis(o.frm,1);sOpa(o.frm,0);
    setTimeout(function(){sTrx(o.frm,'opacity '+guispd+'ms');sOpa(o.frm,1);},0);
    }else{
    o.dn=0;
    sOpa(o.frm,0);
    setTimeout(function(){sVis(o.frm,0)},guispd);
    };
  };
 sThS(o.frm,function(){o.btn.onblur=function(){}});
 sThE(o.frm,function(){o.btn.onblur=blurtest;if(document.activeElement.ismnu!=1){blurtest()}});
 sPar(o.btn,o);sPar(o.frm,o);sPar(t,o.btn);
 return o;
 };function xPar(){
  var o=new xDiv();
  o.live=1;
  o.fps=30;
  o.lifeCycle=2; //seconds
  o.eRes=function(){
    var s=gSiz(o);
    sBrR(o,[s[1]/2]);
    };
  o.run=function(){};
  o.internRun=function(){
    if (o.live>0) {o.live-=1/(o.fps*o.lifeCycle);
    o.run(o.live);
    setTimeout(o.internRun,1000/o.fps);
    }else{
    sPar(o,undefined);
    };
  };
  o.internRun();
  return o;
  };
function xPrg() {
  var v=0;
  var o=new xDiv();
  sBrW(o,[2]);
  sBrC(o,['#669']);
  sOvf(o,'hidden');
  var c=new xDiv();
    sBkC(c,'#ddd');
    sBkL(c,90,'#ddf , #aaf, #ccf');
    sPos(c,[0,0]);
    sTrx(c,'all 250ms ease');
    sPar(c,o);
  var t=new xLab();
    sPos(t,[0,0]);
    sFtC(t,'#449');
    sFtA(t,'center');
    sPar(t,o);
  o.eRes=function(){
    var s=gInS(o);
    sBrR(o,[s[1]/3]);
    sSiz(t,s);
    draw();
    };
  function draw(){
  var s=gInS(o);
  sSiz(c,[v*s[0],s[1]]);
  sTxt(t,parseInt(v*100)+' %');
  };
  Object.defineProperty(o, "value", { 
    get: function () {return v},
    set: function (i) {
      if (v!=i) {v=i;draw()}
      } });
  o.noTrx=function(){sTrx(c,'')};
  return o;
  };
function xPwd(){
  var o=new xTbx();
  o.type='password';
  return o;
  };
var xSrv=function(url){
  var o=new FormData();
  var s = new XMLHttpRequest();
  s.open('post', url, true);
  o.add=function (fieldname,fieldvalue){
    o.append(fieldname,fieldvalue);
    };
  o.addF=function (fieldname,file,filename){
    o.append(fieldname,file,filename);
    
    };
  o.eChg=function () {};
  o.post=function (url){
    s.send(o);
    };
  s.onreadystatechange = function (aEvt) { if(s.readyState == 4) {o.value=s.response;o.eChg();} }
  o.value='';
  return o;
  };

function rCmd(url,cmd){
var hourglass=new xHgl();sPar(hourglass,document.body);
 var x=new xSrv(url);x.add('cmd',cmd);
 x.eChg=function() {eval(x.value);sPar(hourglass,undefined);};
 x.post();
 }

var xSgo=function(url){
  var o=document.createElement('form');sVis(o,0);
  o.method='post';o.action=url;
  o.add=function (fieldname,fieldvalue){
    var i=document.createElement('input');
    i.name=fieldname;i.value=fieldvalue;sPar(i,o)
    sPar(i,o);
    };
  o.addF=function (fieldname,file,filename){
    };
  o.post=function (url){
    sPar(o,document.body);
    o.submit();
    sPar(o,undefined);
    };
  return o;
  };

var xSrvSync=function(url){
  var o=new FormData();
  var s = new XMLHttpRequest();
  s.open('post', url, false);
  o.add=function (fieldname,fieldvalue){
    o.append(fieldname,fieldvalue);
    };
  o.addF=function (fieldname,file,filename){
    o.append(fieldname,file,filename)
    };
  o.post=function (url){
    s.send(o);
    return s.response;
    };
  return o;
  };

// New one that manage hourglass...
var xSrv2=function(url){
  var o=new FormData();
  var s = new XMLHttpRequest();
  var HglWait1=0;
  s.open('post', url, true);
  o.add=function (fieldname,fieldvalue){
    o.append(fieldname,fieldvalue);
    };
  o.addF=function (fieldname,file,filename){
    o.append(fieldname,file,filename)
    };
  o.eChg=function () {};
  o.post=function (url){
    s.send(o);
    };
  s.onreadystatechange = function (aEvt) { 
  if(s.readyState==1){HglWait1=new xHgl();sPar(HglWait1,0)}
  if(s.readyState==4){sPar(HglWait1,-1);HglWait1=undefined;o.value=s.response;o.eChg()}
 }
  o.value='';
  return o;
  };
function xTab() {
 var o=new xDiv();
 sNoS(o);
 o.val=0;
 o.items=[];
  o.add=function(txt){
    var i=new xDiv(); sTxt(i,txt); sPar(i,o);
    sBrW(i,[1]);sFtA(i,'center');sOvf(i,'hidden');sNoS(i);sMoP(i,'pointer');
    o.items.push(i);
    i.onmouseenter=function(){sFtC(i,'#00a')};
    i.onmouseleave=function(){sFtC(i,'#000')};
    sThE(i,function(){if(o.value!=i.id){o.value=i.id}});
    i.id=o.items.length-1;
    o.eRes();
    };
 o.eRes=function(){
 for(var i=0;i<o.items.length;i++){
  var s=gInS(o);
  var w1=s[0]/o.items.length;
  move(o.items[i],[i*w1,0,w1,s[1]]);
  sBrR(o.items[i],[s[1]/6,s[1]/3,s[1]/9,s[1]/9]);
  sFtN(o.items[i],s[1]*0.5+'px/'+s[1]+'px fnt1');
  sBrC(o.items[i],o.val==i?['#557']:['#888']);
  sBkL(o.items[i],90,o.val==i?'#cde 10%, #9ab 70%':'#eee 10%, #bbb 70%');
  }
 }
 o.eChg=function(){};
 Object.defineProperty(o, "value", { 
   get: function () {return o.val},
   set: function (s) {if(o.val!=s){o.val=s;o.eRes();o.eChg()}}
   });
 return o;
 }
function xTbl() {
  var headheight = 20;
  var rowsheight = 20;
  var obj = new xDiv();
   sPos(obj,[50,50]);
   sSiz(obj,[320,240]);
   sOvf(obj,'hidden');
   sBrW(obj,[1]);
   sBrC(obj,['#ccc']);
   sFtN(obj,'12px/20px fnt1');

  obj.head = new xDiv();
  sBkL(obj.head,90,'#eee 10%, #bbb 70%');

  sPos(obj.head,[0,0]);
  sMoP(obj.head,'default');
  sNoS(obj.head);
  obj.head.field = [];
  obj.createFields=function(f) {
    for (var n=0; n<f.length; n++) {
      if (!obj.head.field[n]) {obj.head.field[n] = new xDiv()}; 
        var c=obj.head.field[n];
        sTxt(c,f[n][0]);
        sBrW(c,[1]);
        sPos(c,[(obj.head.field[n-1]?gPos(obj.head.field[n-1])[0]+gSiz(obj.head.field[n-1])[0]-gBrW(obj.head.field[n-1])[1]: 0),0]);
        sSiz(c,[f[n][1], headheight]);
        sBrC(c,['#aaa']);
        sFtN(c,'12px/20px fnt1');
        sFtA(c,'center');
        sTxS(c,1,1,2,'#ccc');
        sPar(c,obj.head);
        };
    sSiz(obj.head, [gPos(obj.head.field[f.length-1])[0] + gSiz(obj.head.field[f.length-1])[0] ,headheight]);
    sPar(obj.head,obj);
    for(var n=obj.head.field.length-1;n>f.length-1;n--) {
      gPar(obj.head.field[n]).removeChild(obj.head.field[n]);
      obj.head.field.pop();
      };
    };
  Object.defineProperty(obj, "fields", { 
    get: function () {return ''},
    set: function (s) {obj.createFields(s)}
    });
  obj.body = new xDiv(); 
   sPos(obj.body,[0,headheight]);
   sBkC(obj.body,'#f8f8f8');
   sOvf(obj.body,'auto');
   sPar(obj.body,obj);
  obj.body.onscroll = function() {sPos(obj.head,[-this.scrollLeft,0])};
  obj.body.rows = [];
  obj.clear=function(){
    for(var n=0; n<obj.body.rows.length;n++) {
        obj.body.removeChild(obj.body.rows[n]) };
    obj.body.rows = [];
    };
  function mentr() {this.style.backgroundColor='#ace';};
  function mleav() {this.style.backgroundColor = this.idx % 2 ? '#f5f5f5': '#eec';};
  obj.addRow = function() {
    var y=obj.body.rows.length;
    obj.body.rows[y] = new xDiv();
    sPos(obj.body.rows[y],[0,rowsheight * y]);
    sFtC(obj.body.rows[y],'#225');
    sBkC(obj.body.rows[y],(y%2?'#f5f5f5':'#eec'));
    obj.body.rows[y].idx = y;
    obj.body.rows[y].onclick = function() {obj.rowclick(this.idx)};
    obj.body.rows[y].onmouseenter = mentr;
    obj.body.rows[y].onmouseleave = mleav;
    obj.body.rows[y].cells = [];
    var n=0;
    for (var n=0; n<obj.head.field.length;n++) {
      obj.body.rows[y].cells[n] = new xDiv(); 
      var c = obj.body.rows[y].cells[n];
       sBrW(c,[0,1,1,1]);
       sBrC(c,['#aaa']);
       sPad(c,[0,3]);sFtZ(c);sOvf(c,'hidden');
       sPos(c,[(obj.head.field[n-1]?gPos(obj.head.field[n-1])[0]+gSiz(obj.head.field[n-1])[0]-gBrW(obj.head.field[n-1])[1]: 0),0]);
       sSiz(c,[gSiz(obj.head.field[n])[0], rowsheight]);
       sPar(c,obj.body.rows[y]);
      };
    sSiz(obj.body.rows[y],[gSiz(obj.head)[0], rowsheight]);
    sPar(obj.body.rows[y],obj.body);
    }; 
  obj.cells = function(y,x) {return obj.body.rows[y].cells[x]};
  obj.eRes=function() {sSiz(obj.body,[gInS(obj)[0],gInS(obj)[1]-headheight]);};
  obj.eRes();
  obj.rowclick=function(idx){};
  return obj
  };

function xTbl2() {
  var headheight = 48;
  var rowsheight = 24;
  var obj = new xDiv();
   sPos(obj,[50,50]);
   sSiz(obj,[320,240]);
   sOvf(obj,'hidden');
   sBrW(obj,[1]);
   sBrC(obj,['#ccc']);sShd(obj,1,1,0,10,'rgba(100,100,100,.3)');
   sFtN(obj,'14px/21px fnt1');

  obj.head = new xDiv();
  sBkL(obj.head,90,'#aaa,#666 25%,#666 90%,#bbb');
  sPos(obj.head,[0,0]);
  sMoP(obj.head,'default');
  sNoS(obj.head);
  obj.head.field = [];
  obj.createFields=function(f) {
    for (var n=0; n<f.length; n++) {
      if (!obj.head.field[n]) {obj.head.field[n] = new xDiv()}; 
        var c=obj.head.field[n];
        sTxt(c,f[n][0]);
        sBrW(c,[1]);
        sPos(c,[(obj.head.field[n-1]?gPos(obj.head.field[n-1])[0]+gSiz(obj.head.field[n-1])[0]-gBrW(obj.head.field[n-1])[1]: 0),0]);
        sSiz(c,[f[n][1], headheight]);
        sBrC(c,['#aaa']);
        sFtN(c,'bold 14px/21px fnt1');
        sFtC(c,'#fff');
        sFtA(c,'center');
        sTxS(c,1,1,2,'#ccc');
        sPar(c,obj.head);
        };
    sSiz(obj.head, [gPos(obj.head.field[f.length-1])[0] + gSiz(obj.head.field[f.length-1])[0] ,headheight]);
    sPar(obj.head,obj);
    for(var n=obj.head.field.length-1;n>f.length-1;n--) {
      gPar(obj.head.field[n]).removeChild(obj.head.field[n]);
      obj.head.field.pop();
      };
    };
  Object.defineProperty(obj, "fields", { 
    get: function () {return ''},
    set: function (s) {obj.createFields(s)}
    });
  obj.body = new xDiv(); 
   sPos(obj.body,[0,headheight]);
   sBkC(obj.body,'#f8f8f8');
   sOvf(obj.body,'auto');
   sPar(obj.body,obj);
  obj.body.onscroll = function() {sPos(obj.head,[-this.scrollLeft,0])};
  obj.body.rows = [];
  obj.clear=function(){
    for(var n=0; n<obj.body.rows.length;n++) {
        obj.body.removeChild(obj.body.rows[n]) };
    obj.body.rows = [];
    };
  obj.addRow = function() {
    var y=obj.body.rows.length;
    obj.body.rows[y] = new xDiv();
    sPos(obj.body.rows[y],[0,rowsheight * y]);
    sFtC(obj.body.rows[y],'#225');
    sBkC(obj.body.rows[y],(y%2?'#f5f5f5':'#f0f0f0'));
    obj.body.rows[y].idx = y;
    obj.body.rows[y].onclick = function() {obj.rowclick(this.idx)};
    obj.body.rows[y].onmouseenter = function() { this.style.backgroundColor='#f9f8d8'};
    obj.body.rows[y].onmouseleave = function() { this.style.backgroundColor = this.idx % 2 ? '#f5f5f5': '#f0f0f0' };
    obj.body.rows[y].cells = [];
    var n=0;
    for (var n=0; n<obj.head.field.length;n++) {
      obj.body.rows[y].cells[n] = new xDiv(); 
      var c = obj.body.rows[y].cells[n];
       sBrW(c,[0,1,1,1]);
       sBrC(c,['#aaa']);
       sPad(c,[0,3]);sFtZ(c);sOvf(c,'hidden');
       sPos(c,[(obj.head.field[n-1]?gPos(obj.head.field[n-1])[0]+gSiz(obj.head.field[n-1])[0]-gBrW(obj.head.field[n-1])[1]: 0),0]);
       sSiz(c,[gSiz(obj.head.field[n])[0], rowsheight]);
       sPar(c,obj.body.rows[y]);
      };
    sSiz(obj.body.rows[y],[gSiz(obj.head)[0], rowsheight]);
    sPar(obj.body.rows[y],obj.body);
    }; 
  obj.cells = function(y,x) {return obj.body.rows[y].cells[x]};
  obj.eRes=function() {sSiz(obj.body,[gInS(obj)[0],gInS(obj)[1]-headheight]);};
  obj.eRes();
  obj.rowclick=function(idx){};
  return obj
  };function xTbx() {
 var o = document.createElement('INPUT');
 o.type='text';
 o.style.position='absolute';
 o.style.boxSizing='border-box';

 sPad(o,[0,3]);
 sBrW(o,[1]);
 sBrR(o,[3]);
 sBrC(o,['#999']);
 sShd(o,1,1,0,2,'rgba(100,100,100,.2)');
 o.onmouseenter=function(){sBrC(o,['#669'])};
 o.onmouseleave=function(){sBrC(o,['#999'])};
 o.eRes=function(){
   var h=gInS(o)[1]-2;
   sFtN(o,h*.7+'px/'+h+'px fnt1');
   };
 o.eRes();
 o.eChg=function(){};
 o.onchange=function(){o.eChg()};
 o.eEnt=function(){};
 o.onkeydown=function(e){if(e.keyCode==13){o.eEnt()}};
 return o;
 };function xTri() {
 var col='#000';
 var o=document.createElement('canvas');
 var c=o.getContext('2d');
 o.eRes=function(){
  var w=gSiz(o)[0], h=gSiz(o)[1];
  o.width=w;o.height=h;
  c.clearRect(0,0,w,h);
  c.beginPath();
  c.moveTo(0,h);
  c.lineTo(w/2,0);
  c.lineTo(w,h);
  c.closePath();
  c.fillStyle = col;
  c.fill();
 };
  Object.defineProperty(o, "col", { 
    get: function () {return col},
    set: function (i) {col=i; o.eRes()}
    });
 return o;
};function xTxA() {
 var o = document.createElement('TEXTAREA');
 sFtN(o,'bold 14px courier new');
 sPad(o,[1,4]);
 sBrW(o,[1]);
 sBrC(o,['#aaa']);
 o.onmouseenter=function(){sBrC(o,['#66f'])};
 o.onmouseleave=function(){sBrC(o,['#999'])};
 o.eChg=function(){};
 o.onchange=function(){o.eChg()};
 return o;
 };
function xXL1() {
  var o=new xDiv();
   sSiz(o,[500,80]);
   sBkL(o,90,'#eee, #ddd 40%,#ddd 75%, #eee');
   sBrW(o,[1]);
   sBrR(o,[26,10,10,10]);sBrC(o,['#ddd']);
   sMoP(o,'pointer');
  var i=new xDiv();
   move (i,[10,10,60,60]);
   sBkS(i,[60,60]);
   sBkI(i,'Excel.png');
   sPar(i,o);
  var c=new xDiv();
   move(c,[80,26,400,30]);
   sBrW(c,[0]);
   sPar(c,o);
   sFtN(c,'18px/30px calibri');sFtC(c,'#259');
  o.eClk=function(){};
  sThE(o,function(){o.eClk()});
  o.text=c;
  o.onmouseenter=function(){sTrx(o,'.1s');sBkL(o,90,'#dfe, #beb 40%,#beb 75%, #dfe')};
  o.onmouseleave=function(){sBkL(o,90,'#eee, #ddd 40%,#ddd 75%, #eee')};
  return o;
  }
function xYes() {
  var xval=0;
  var o=new xDiv();
  sBrW(o,[1]);
  sBrC(o,['#aaa']);sBkC(o,'#f2f2f2');
  sOvf(o,'hidden'); 
  sMoP(o,'pointer');
  sNoS(o);
  sShd(o,1,1,0,10,'rgba(100,100,100,.3)');
  sTxS(o,1,1,2,'#ffd');
  var b=new xDiv();
  sBrW(b,[0]);
  sBkL(b,87,'#fff 10%, #ccc 60%');
  sBrR(b,[0]);
  sPos(b,[0,0]);
  sTxt(b,"NO");
  sFtA(b,'center');
  sPar(b,o);
  o.eRes=function(){
    var s=gInS(o);
    sBrR(o,[s[1]/3]); 
    sTrx(b,'');
    sSiz(b,[s[0]/2,s[1]]);
    sFtN(b,s[1]*.6+'px/' + (s[1])+'px calibri');
    };
  o.eChg=function(){}; 
  function c(){
    sTrx(b,'all .2s ease');
    xval=(xval==0?1:0);
    sTxt(b,(xval==0?'NO':'YES'));
    sPos(b,[xval*gInS(o)[0]/2,0]);
    o.eChg();
    };
  sThS(o,c);
  Object.defineProperty(o, "value", { 
    get: function () {return xval},
    set: function (i) {
      if (xval!=i) {c()}
      } });
  return o;
  };
