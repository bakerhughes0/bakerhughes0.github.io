c_proj='rgba(120,230,220,.8)';
c_tip='rgba(50,110,90,.9)';

function qs(variable) {
  var vars = window.location.search.substring(1).toLowerCase().split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == variable) return decodeURIComponent(pair[1]);
    }
  }

function gfxbox(){
  var o = new xDiv();
  sBrW(o,[1]);
  sBrC(o,['#486']);
  sBrR(o,[8]);
  sBkL(o,100,'#243 30%, #222 100%');
  sOpa(o,.88);
  sPar(o,0);
  return o;
  }

function movep(o,t){
  var W=scrW(), H=scrH();
  move(o,[t[0]*W,t[1]*H,t[2]*W,t[3]*H]);
  }


function background(){
  main=new xDiv();sOvf(main,'hidden');sPar(main,0);sBkL(main,100,'#243 30%, #222 100%');
  main.l1 = new xDiv();
  sBrW(main.l1,[2]);sBrC(main.l1,['#8a9']);sBrR(main.l1,[9999]);sRot(main.l1,[0,0,20]);sPar(main.l1,main);
  sBkL(main.l1,92,'#222 0%, #243 40%, #243 60%, #222 100%');sOpa(main.l1,.5);  
  main.l2 = new xDiv();
  sBrW(main.l2,[2]);sBrC(main.l2,['#8a9']);sBrR(main.l2,[9999]);sRot(main.l2,[0,0,-20]);sPar(main.l2,main);
  sBkL(main.l2,92,'#222 0%, #243 40%, #243 60%, #222 100%');sOpa(main.l2,.5);
  main.eRes=function(){
    movep(main.l1,[0.6,0.3,0.8,0.2]);
    movep(main.l2,[0.6,0.5,0.8,0.2]);
    };
  return main;
  }





function toolTipContent6(e) {
	var str = "";
	var total = 0;
	var str2, str3;
	for (var i = 0; i < e.entries.length; i++){

		var  str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\"> "+e.entries[i].dataSeries.name+"</span>: <strong>"+e.entries[i].dataPoint.y+"</strong><br/>";
	  if(!['Target', 'Cible', 'Capacity', 'Projection'].includes(e.entries[i].dataSeries.name)){	
            total = e.entries[i].dataPoint.y + total;
            }
		str = str.concat(str1);

	  }
	str2 = "<span style = \"color:Black;\"><strong>"+(e.entries[0].dataPoint.label)+"</strong></span><br/>";
	total = Math.round(total * 100) / 100;
	str3 = "<span style = \"color:Tomato\">Total:</span><strong> "+total+"</strong><br/>";
	return (str2.concat(str)).concat(str3);
  } 
 
function fmtCur2(num) {
 var a=parseFloat(num).toFixed(0);
 return a.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
 }

function toolTipContent32(e) {
  var str = "";
  var total = 0;
  var str2, str3;
  for (var i = 0; i < e.entries.length; i++){
    var  str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\"> "+e.entries[i].dataSeries.name+"</span>: <strong>"+fmtCur2(e.entries[i].dataPoint.y)+"</strong><br/>";
    if(e.entries[i].dataSeries.name!='Target' && e.entries[i].dataSeries.name!='Capacity'){ total += e.entries[i].dataPoint.y;}
    str = str.concat(str1);
    }
  str2 = "<span style = \"color:DodgerBlue;\"><strong>"+(e.entries[0].dataPoint.label)+"</strong></span><br/>";
  total = Math.round(total * 100) / 100;
  str3 = "<span style = \"color:Tomato\">Total:</span><strong> "+fmtCur2(total)+"</strong><br/>";
  return (str2.concat(str)).concat(str3);
  }   
