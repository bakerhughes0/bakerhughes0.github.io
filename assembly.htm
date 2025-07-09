<html>
<head>
<script type=text/javascript src=js/func.js?v=001></script>
<script type=text/javascript src=js/canvasjs.min.js?v=007></script>
<script type=text/javascript src=module.js?v=003></script>
<script type=text/javascript src=kpi_data1.js?v=2></script>

<script type=text/javascript>

function refreshall(){
  gfx08.render();gfx09.render();gfx10.render();gfx11.render();
  gfx12.render();gfx13.render();gfx14.render();gfx15.render();
  gfx16.render();gfx17.render();gfx18.render();gfx19.render();
  }
function loadData(){
  var thisWeek = isoWeek(new Date()).slice(4,7);
  var d = new Date();
  var sd = d.getUTCFullYear() + '-' + (d.getUTCMonth() + 1) + '-' + d.getUTCDate() + ' ' +  d.getUTCHours() + ':' + d.getUTCMinutes();
  var js = document.createElement('script');
  js.type='text/javascript';
  js.src="kpi2.js" + "?d=" + sd;

  document.head.appendChild(js);    
  js.onload = function(){
  for(var i=0;i<7;i++) {
    gfx08.options.data[i].dataPoints=[];
    gfx09.options.data[i].dataPoints=[];
    gfx10.options.data[i].dataPoints=[];
    gfx11.options.data[i].dataPoints=[];
    }

  var max = 0;
  for(var w in qprod.CFX) {
    var maxw = 0;
    for(var i=0;i<5;i++) {      
      gfx08.options.data[i].dataPoints.push({label:w, y:qprod.CFX[w][i]});
      maxw += qprod.CFX[w][i];
      }
    max = Math.max(max,maxw);
    }
  for(var n=0;n<LOB.week.length;n++){
    gfx08.options.data[5].dataPoints.push({label:LOB.week[n].substring(2), y:LOB.cfx[n]});
    max = Math.max(max,LOB.cfx[n]);
    }
  for(var w in qincprod.CFX) {   
    var est = 0;
    for(var i=0;i<5;i++) {est += qincprod.CFX[w][i];}
    if (w>=thisWeek) { gfx08.options.data[6].dataPoints.push({label:w, y:est}); }else{gfx08.options.data[6].dataPoints.push({label:w, y:null}); }
    }
  gfx08.options.axisY.maximum = max*1.05;

  var max = 0;
  for(var w in qprod.VPK) {
    var maxw = 0;
    for(var i=0;i<5;i++) {      
      gfx09.options.data[i].dataPoints.push({label:w, y:qprod.VPK[w][i]});
      maxw += qprod.VPK[w][i];
      }
    max = Math.max(max,maxw);
    }
  for(var n=0;n<LOB.week.length;n++){
    gfx09.options.data[5].dataPoints.push({label:LOB.week[n].substring(2), y:LOB.vpk[n]});
    max = Math.max(max,LOB.vpk[n]);
    }
  for(var w in qincprod.VPK) {   
    var est = 0;
    for(var i=0;i<5;i++) {est += qincprod.VPK[w][i];}
    if (w>=thisWeek) { gfx09.options.data[6].dataPoints.push({label:w, y:est}); }else{gfx09.options.data[6].dataPoints.push({label:w, y:null}); }
    }
  gfx09.options.axisY.maximum = max*1.05;

  var max = 0;
  for(var w in qprod.GLB) {
    var maxw = 0;
    for(var i=0;i<5;i++) {      
      gfx10.options.data[i].dataPoints.push({label:w, y:qprod.GLB[w][i]});
      maxw += qprod.GLB[w][i];
      }
    max = Math.max(max,maxw);
    }
  for(var n=0;n<LOB.week.length;n++){
    gfx10.options.data[5].dataPoints.push({label:LOB.week[n].substring(2), y:LOB.glbcal[n]});
    max = Math.max(max,LOB.glbcal[n]);
    }
  for(var w in qincprod.GLB) {   
    var est = 0;
    for(var i=0;i<5;i++) {est += qincprod.GLB[w][i];}
    if (w>=thisWeek) { gfx10.options.data[6].dataPoints.push({label:w, y:est}); }else{gfx10.options.data[6].dataPoints.push({label:w, y:null}); }
    }
  gfx10.options.axisY.maximum = max*1.05;

  var max = 0;
  for(var w in qprod.LVL) {
    var maxw = 0;
    for(var i=0;i<5;i++) {      
      gfx11.options.data[i].dataPoints.push({label:w, y:qprod.LVL[w][i]});
      maxw += qprod.LVL[w][i];
      }
    max = Math.max(max,maxw);
    }
  for(var n=0;n<LOB.week.length;n++){
    gfx11.options.data[5].dataPoints.push({label:LOB.week[n].substring(2), y:LOB.lvl[n]});
    max = Math.max(max,LOB.lvl[n]);
    }
  for(var w in qincprod.LVL) {   
    var est = 0;
    for(var i=0;i<5;i++) {est += qincprod.LVL[w][i];}
    if (w>=thisWeek) { gfx11.options.data[6].dataPoints.push({label:w, y:est}); }else{gfx11.options.data[6].dataPoints.push({label:w, y:null}); }
    }
  gfx11.options.axisY.maximum = max*1.05;

  max = 0;
  gfx12.options.data[0].dataPoints=[];
  for(var n=0, cum=0;n<LOB.week.length;n++){
    cum+=LOB.cfx[n]; gfx12.options.data[0].dataPoints.push({label:LOB.week[n].substring(2), y:cum});
    max = Math.max(max, cum);
    }
  gfx12.options.data[1].dataPoints=[];
  var cum = 0;
  for(var w in qprod.CFX) {
    for(var i=0;i<5;i++){ cum+= qprod.CFX[w][i];}
    if (w<=thisWeek) { gfx12.options.data[1].dataPoints.push({label:w, y:cum}); }
    max = Math.max(max, cum);
    }
  gfx12.options.data[2].dataPoints=[];
  for(var w in qincprod.CFX) {
    for(var i=0;i<5;i++){ cum+= qincprod.CFX[w][i];}
    if (w>=thisWeek) { gfx12.options.data[2].dataPoints.push({label:w, y:cum}); }else{gfx12.options.data[2].dataPoints.push({label:w, y:null}); }
    max = Math.max(max, cum);
    }
  gfx12.options.axisY.maximum = max;

  max = 0;
  gfx13.options.data[0].dataPoints=[];
  for(var n=0, cum=0;n<LOB.week.length;n++){
    cum+=LOB.vpk[n]; gfx13.options.data[0].dataPoints.push({label:LOB.week[n].substring(2), y:cum});
    max = Math.max(max, cum);
    }
  gfx13.options.data[1].dataPoints=[];
  var cum = 0;
  for(var w in qprod.VPK) {
    for(var i=0;i<5;i++){ cum+= qprod.VPK[w][i];}
    if (w<=thisWeek) { gfx13.options.data[1].dataPoints.push({label:w, y:cum}); }
    max = Math.max(max, cum);
    }
  gfx13.options.data[2].dataPoints=[];
  for(var w in qincprod.VPK) {
    for(var i=0;i<5;i++){ cum+= qincprod.VPK[w][i];}
    if (w>=thisWeek) { gfx13.options.data[2].dataPoints.push({label:w, y:cum}); }else{gfx13.options.data[2].dataPoints.push({label:w, y:null}); }
    max = Math.max(max, cum);
    }
  gfx13.options.axisY.maximum = max;

  max = 0;
  gfx14.options.data[0].dataPoints=[];
  for(var n=0, cum=0;n<LOB.week.length;n++){
    cum+=LOB.glbcal[n]; gfx14.options.data[0].dataPoints.push({label:LOB.week[n].substring(2), y:cum});
    max = Math.max(max, cum);
    }
  gfx14.options.data[1].dataPoints=[];
  var cum = 0;
  for(var w in qprod.GLB) {
    for(var i=0;i<5;i++){ cum+= qprod.GLB[w][i];}
    if (w<=thisWeek) { gfx14.options.data[1].dataPoints.push({label:w, y:cum}); }
    max = Math.max(max, cum);
    }
  gfx14.options.data[2].dataPoints=[];
  for(var w in qincprod.GLB) {
    for(var i=0;i<5;i++){ cum+= qincprod.GLB[w][i];}
    if (w>=thisWeek) { gfx14.options.data[2].dataPoints.push({label:w, y:cum}); }else{gfx14.options.data[2].dataPoints.push({label:w, y:null}); }
    max = Math.max(max, cum);
    }
  gfx14.options.axisY.maximum = max;

  max = 0;
  gfx15.options.data[0].dataPoints=[];
  for(var n=0, cum=0;n<LOB.week.length;n++){
    cum+=LOB.lvl[n]; gfx15.options.data[0].dataPoints.push({label:LOB.week[n].substring(2), y:cum});
    max = Math.max(max, cum);
    }
  gfx15.options.data[1].dataPoints=[];
  var cum = 0;
  for(var w in qprod.LVL) {
    for(var i=0;i<5;i++){ cum+= qprod.LVL[w][i];}
    if (w<=thisWeek) { gfx15.options.data[1].dataPoints.push({label:w, y:cum}); }
    max = Math.max(max, cum);
    }
  gfx15.options.data[2].dataPoints=[];
  for(var w in qincprod.LVL) {
    for(var i=0;i<5;i++){ cum+= qincprod.LVL[w][i];}
    if (w>=thisWeek) { gfx15.options.data[2].dataPoints.push({label:w, y:cum}); }else{gfx15.options.data[2].dataPoints.push({label:w, y:null}); }
    max = Math.max(max, cum);
    }
  gfx15.options.axisY.maximum = max;

  gfx16.options.data[0].dataPoints=[{label:'20Q1', y:837},{label:'20Q2', y:596},{label:'20Q3', y:677},{label:'20Q4', y:519},{label:'21Q1', y:423},{label:'21Q2', y:501},{label:'21Q3', y:606},{label:'21Q4', y:679},{label:'22Q1', y:572},{label:'22Q2', y:445},{label:'22Q3', y:532},{label:'22Q4', y:496},{label:'23Q1', y:546},{label:'23Q2', y:613},{label:'23Q3', y:526},{label:'23Q4', y:616},{label:'24Q1', y:588},{label:'24Q2', y:586},{label:'24Q3', y:588},{label:'24Q4', y:745},{label:'25Q1', y:738},{label:'25Q2', y:643},{name:"Target",color:"#cc6",label:'25Q3', y:0}];
  gfx17.options.data[0].dataPoints=[{label:'20Q1',y:211},{label:'20Q2',y:200},{label:'20Q3',y:281},{label:'20Q4',y:209},{label:'21Q1',y:254},{label:'21Q2',y:233},{label:'21Q3',y:163},{label:'21Q4',y:188},{label:'22Q1',y:126},{label:'22Q2',y:93},{label:'22Q3',y:136},{label:'22Q4',y:179},{label:'23Q1',y:170},{label:'23Q2',y:113},{label:'23Q3',y:118},{label:'23Q4',y:104},{label:'24Q1', y:93},{label:'24Q2', y:122},{label:'24Q3', y:158},{label:'24Q4', y:193},{label:'25Q1', y:178},{label:'25Q2', y:276},{name:"Target",color:"#cc6",label:'25Q3', y:0}];
  gfx18.options.data[0].dataPoints=[{label:'20Q1',y:543},{label:'20Q2',y:331},{label:'20Q3',y:359},{label:'20Q4',y:310},{label:'21Q1',y:212},{label:'21Q2',y:319},{label:'21Q3',y:469},{label:'21Q4',y:468},{label:'22Q1',y:408},{label:'22Q2',y:287},{label:'22Q3',y:141},{label:'22Q4',y:157},{label:'23Q1',y:142},{label:'23Q2',y:90},{label:'23Q3',y:107},{label:'23Q4',y:162},{label:'24Q1', y:161},{label:'24Q2', y:122},{label:'24Q3', y:248},{label:'24Q4', y:344},{label:'25Q1', y:197},{label:'25Q2', y:169},{name:"Target",color:"#cc6",label:'25Q3', y:0}];
  gfx19.options.data[0].dataPoints=[{label:'20Q1',y:212},{label:'20Q2',y:286},{label:'20Q3',y:248},{label:'20Q4',y:188},{label:'21Q1',y:312},{label:'21Q2',y:186},{label:'21Q3',y:184},{label:'21Q4',y:147},{label:'22Q1',y:152},{label:'22Q2',y:202},{label:'22Q3',y:172},{label:'22Q4',y:140},{label:'23Q1',y:209},{label:'23Q2',y:218},{label:'23Q3',y:311},{label:'23Q4',y:266},{label:'24Q1', y:294},{label:'24Q2', y:314},{label:'24Q3', y:289},{label:'24Q4', y:216},{label:'25Q1', y:135},{label:'25Q2', y:222},{name:"Target",color:"#cc6",label:'25Q3', y:0}];

  sTxt(timstp,'Update : ' + tm);
  refreshall()

    }
  setTimeout(loadData, 60000);
  }

window.onload=function(){
  var bg = new background();
  t1=new xLab();sFtC(t1,'#ccc');sPar(t1,0);
  t2=new xLab();sFtC(t2,'#ccc');sPar(t2,0);sFtA(t2,'right');
  sTxt(t1,"CONDE MATERIALS KPI - PRODUCTION CONTROL");
  sTxt(t2,"ASSEMBLY PRODUCTION");
  timstp=new xLab();sPar(timstp,main);sFtC(timstp,'#666');
  var g = [];
  for(var n=0; n<12; n++){g[n] = new gfxbox();}

  var axeY_1 = {title: "Quantity", titleFontColor: "#eee", labelFontColor: "#eee", labelFontFamily: 'Arial', minimum:0}
  var axeX_1 = {labelFontColor: "#eee", interval: 1, labelAngle: -45, labelFontFamily: 'Arial'}
  var axeX_2 = {labelFontColor: "#eee", interval: 1, labelAngle: -66, labelFontFamily: 'Arial', labelFontSize: 10}
  var leg_1 = {horizontalAlign: "center", verticalAlign: "bottom", labelFontFamily: 'Arial', fontColor: "#eee"}
  var tTip1 = {shared: true, backgroundColor: c_tip, borderColor:'grey', content: toolTipContent6};
  var tTip2 = {shared: true, backgroundColor: c_tip, borderColor:'grey'};
  gfx08 = new CanvasJS.Chart(g[0], {
  animationEnabled: true,
  animationDuration: 500,
  title: {text: "CAMFLEX WEEK PRODUCTION", fontColor:"#ddd",fontFamily: 'Arial'},
  backgroundColor: null,
  dataPointMaxWidth: 14,
  legend:leg_1,
  axisY:{title: "Quantity", titleFontColor: "#eee", labelFontColor: "#eee", labelFontFamily: 'Arial', minimum:0},
  axisX:axeX_1,
  toolTip: tTip1,
  data: [              
    { type: "stackedColumn", name: "Mon", color: "#8B9", dataPoints: [] },
    { type: "stackedColumn", name: "Tue", color: "#586", dataPoints: [] },
    { type: "stackedColumn", name: "Wed", color: "#8B9",  dataPoints: [] },
    { type: "stackedColumn", name: "Thu", color: "#586", dataPoints: [] },
    { type: "stackedColumn", name: "Fri", color: "#8B9",  dataPoints: [] },
    { type: "line", name:"Initial plan", lineDashType:"dot", markerSize: 4, color: "#CC6", showInLegend:true, dataPoints:[]},
    { type: "line", name:"Planned", markerType: "none", lineDashType:"shortDot", color:c_proj, showInLegend:true, dataPoints:[]},
    ]
  });
  gfx09 = new CanvasJS.Chart(g[1], {
  animationEnabled: true,
  animationDuration: 500,
  title: {text: "VARIPAK WEEK PRODUCTION", fontColor:"#ddd",fontFamily: 'Arial'},
  backgroundColor: null,
  dataPointMaxWidth: 14,
  legend:leg_1,
  axisY:{title: "Quantity", titleFontColor: "#eee", labelFontColor: "#eee", labelFontFamily: 'Arial', minimum:0},
  axisX:axeX_1,
  toolTip: tTip1,
  data: [              
    { type: "stackedColumn", name: "Mon", color: "#8B9", dataPoints: [] },
    { type: "stackedColumn", name: "Tue", color: "#586", dataPoints: [] },
    { type: "stackedColumn", name: "Wed", color: "#8B9",  dataPoints: [] },
    { type: "stackedColumn", name: "Thu", color: "#586", dataPoints: [] },
    { type: "stackedColumn", name: "Fri", color: "#8B9",  dataPoints: [] },
    { type: "line", name:"Initial plan", lineDashType:"dot", markerSize: 4, color: "#CC6", showInLegend:true, dataPoints:[]},
    { type: "line", name:"Planned", markerType: "none", lineDashType:"shortDot", color:c_proj, showInLegend:true, dataPoints:[]},
    ]
  });
  gfx10 = new CanvasJS.Chart(g[2], {
  animationEnabled: true,
  animationDuration: 500,
  title: {text: "GLOBES WEEK PRODUCTION", fontColor:"#ddd",fontFamily: 'Arial'},
  backgroundColor: null,
  dataPointMaxWidth: 14,
  legend:leg_1,
  axisY:{title: "Quantity", titleFontColor: "#eee", labelFontColor: "#eee", labelFontFamily: 'Arial', minimum:0},
  axisX:axeX_1,
  toolTip: tTip1,
  data: [              
    { type: "stackedColumn", name: "Mon", color: "#8B9", dataPoints: [] },
    { type: "stackedColumn", name: "Tue", color: "#586", dataPoints: [] },
    { type: "stackedColumn", name: "Wed", color: "#8B9",  dataPoints: [] },
    { type: "stackedColumn", name: "Thu", color: "#586", dataPoints: [] },
    { type: "stackedColumn", name: "Fri", color: "#8B9",  dataPoints: [] },
    { type: "line", name:"Initial plan", lineDashType:"dot", markerSize: 4, color: "#CC6", showInLegend:true, dataPoints:[]},
    { type: "line", name:"Planned", markerType: "none", lineDashType:"shortDot", color:c_proj, showInLegend:true, dataPoints:[]},
    ]
  });
  gfx11 = new CanvasJS.Chart(g[3], {
  animationEnabled: true,
  animationDuration: 500,
  title: {text: "LEVELS WEEK PRODUCTION", fontColor:"#ddd",fontFamily: 'Arial'},
  backgroundColor: null,
  dataPointMaxWidth: 14,
  legend:leg_1,
  axisY:{title: "Quantity", titleFontColor: "#eee", labelFontColor: "#eee", labelFontFamily: 'Arial', minimum:0},
  axisX:axeX_1,
  toolTip: tTip1,
  data: [              
    { type: "stackedColumn", name: "Mon", color: "#8B9", dataPoints: [] },
    { type: "stackedColumn", name: "Tue", color: "#586", dataPoints: [] },
    { type: "stackedColumn", name: "Wed", color: "#8B9",  dataPoints: [] },
    { type: "stackedColumn", name: "Thu", color: "#586", dataPoints: [] },
    { type: "stackedColumn", name: "Fri", color: "#8B9",  dataPoints: [] },
    { type: "line", name:"Initial plan", lineDashType:"dot", markerSize: 4, color: "#CC6", showInLegend:true, dataPoints:[]},
    { type: "line", name:"Planned", markerType: "none", lineDashType:"shortDot", color:c_proj, showInLegend:true, dataPoints:[]},
    ]
  });

  gfx12 = new CanvasJS.Chart(g[4], {
  animationEnabled: true,
  animationDuration: 500,
  title: {text: "CAMFLEX QUARTER TARGET", fontColor:"#ddd",fontFamily: 'Arial'},
  backgroundColor: null,
  legend: leg_1,
  axisY:{title: "Quantity", titleFontColor: "#eee", labelFontColor: "#eee", labelFontFamily: 'Arial', minimum:0},
  axisX:axeX_1,
  toolTip: tTip2,
  data: [              
    { type: "line", name:"Initial plan", lineDashType:"dot", markerSize: 4, color: "#CC6", showInLegend:true, dataPoints:[]},
    { type: "line", name:"Completed", color:"#8b9", showInLegend: true, dataPoints: [] },
    { type: "line", name:"Planned", markerType: "none", lineDashType:"shortDot", color:c_proj, showInLegend:true, dataPoints:[]},
    ]
  });
  gfx13 = new CanvasJS.Chart(g[5], {
  animationEnabled: true,
  animationDuration: 500,
  title: {text: "VARIPAK QUARTER TARGET", fontColor:"#ddd",fontFamily: 'Arial'},
  backgroundColor: null,
  legend: leg_1,
  axisY:{title: "Quantity", titleFontColor: "#eee", labelFontColor: "#eee", labelFontFamily: 'Arial', minimum:0},
  axisX:axeX_1,
  toolTip: tTip2,
  data: [              
    { type: "line", name:"Initial plan", lineDashType:"dot", markerSize: 4, color: "#CC6", showInLegend:true, dataPoints:[]},
    { type: "line", name:"Completed", color:"#8b9", showInLegend: true, dataPoints: [] },
    { type: "line", name:"Planned", markerType: "none", lineDashType:"shortDot", color:c_proj, showInLegend:true, dataPoints:[]},
    ]
  });
  gfx14 = new CanvasJS.Chart(g[6], {
  animationEnabled: true,
  animationDuration: 500,
  title: {text: "GLOBES QUARTER TARGET", fontColor:"#ddd",fontFamily: 'Arial'},
  backgroundColor: null,
  legend: leg_1,
  axisY:{title: "Quantity", titleFontColor: "#eee", labelFontColor: "#eee", labelFontFamily: 'Arial', minimum:0},
  axisX:axeX_1,
  toolTip: tTip2,
  data: [              
    { type: "line", name:"Initial plan", lineDashType:"dot", markerSize: 4, color: "#CC6", showInLegend:true, dataPoints:[]},
    { type: "line", name: "Completed",  color:"#8b9", showInLegend: true, dataPoints: [] },
    { type: "line", name:"Planned", markerType: "none", lineDashType:"shortDot", color:c_proj, showInLegend:true, dataPoints:[]},
    ]
  });  
  gfx15 = new CanvasJS.Chart(g[7], {
  animationEnabled: true,
  animationDuration: 500,
  title: {text: "LEVELS QUARTER TARGET", fontColor:"#ddd",fontFamily: 'Arial'},
  backgroundColor: null,
  legend: leg_1,
  axisY:{title: "Quantity", titleFontColor: "#eee", labelFontColor: "#eee", labelFontFamily: 'Arial', minimum:0},
  axisX:axeX_1,
  toolTip: tTip2,
  data: [              
    { type: "line", name:"Initial plan", lineDashType:"dot", markerSize: 4, color: "#CC6", showInLegend:true, dataPoints:[]},
    { type: "line", name: "Completed",  color:"#8b9", showInLegend: true, dataPoints: [] },
    { type: "line", name:"Planned", markerType: "none", lineDashType:"shortDot", color:c_proj, showInLegend:true, dataPoints:[]},
    ]
  });

  gfx16 = new CanvasJS.Chart(g[8], {
  animationEnabled: true,
  animationDuration: 500,
  title: {text: "CAMFLEX QUARTER PRODUCTION", fontColor:"#ddd",fontFamily: 'Arial'},
  backgroundColor: null,
  dataPointMaxWidth: 10,
  axisY:axeY_1,
  axisX:axeX_2,
  toolTip: tTip2,
  data: [              
    { type: "column", name: "Completed",  color:"#8b9", dataPoints: [] },
    ]
  }); 
  gfx17 = new CanvasJS.Chart(g[9], {
  animationEnabled: true,
  animationDuration: 500,
  title: {text: "VARIPAK QUARTER PRODUCTION", fontColor:"#ddd",fontFamily: 'Arial'},
  backgroundColor: null,
  dataPointMaxWidth: 10,
  axisY:axeY_1,
  axisX:axeX_2,
  toolTip: tTip2,
  data: [              
    { type: "column", name: "Completed",  color:"#8b9", dataPoints: [] },
     ]
  }); 
  gfx18 = new CanvasJS.Chart(g[10], {
  animationEnabled: true,
  animationDuration: 500,
  title: {text: "GLOBES QUARTER PRODUCTION", fontColor:"#ddd",fontFamily: 'Arial'},
  backgroundColor: null,
  dataPointMaxWidth: 10,
  axisY:axeY_1,
  axisX:axeX_2,
  toolTip: tTip2,
  data: [              
    { type: "column", name: "Completed",  color:"#8b9", dataPoints: [] },
     ]
  });
  gfx19 = new CanvasJS.Chart(g[11], {
  animationEnabled: true,
  animationDuration: 500,
  title: {text: "LEVELS QUARTER PRODUCTION", fontColor:"#ddd",fontFamily: 'Arial'},
  backgroundColor: null,
  dataPointMaxWidth: 10,
  axisY:axeY_1,
  axisX:axeX_2,
  toolTip: tTip2,
  data: [              
    { type: "column", name: "Completed",  color:"#8b9", dataPoints: [] },
     ]
  });

  window.onresize=function(){
    movep(bg,[0,0,1,1]);
    movep(t1,[.01, .01, .98, .045]);
    movep(t2,[.01, .01, .98, .045]);
    movep(timstp,[.01, .97, 1, .03]);
    for(var n=0; n<12; n++){
      x = n % 4;
      y = Math.floor(n/4);
      movep(g[n],[.01+x*.2475, .07+y*.3, .2375, .29]);
      }
    refreshall();
    };window.onresize();

  loadData();
  }
</script>
</head>
<body >
</body>
</html>