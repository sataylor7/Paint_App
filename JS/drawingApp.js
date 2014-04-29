require(['../libs/jquery.noConflict','../components/drawingApp.tools', '../components/drawingApp.canvas.builder'], function(jq, tools, canvas){
    var toolCont = jq('.toolOptions'),
        canvasCont = jq('.paint'),
        canvasName = 'paintMe',
        canvasWidth = '500',
        canvasHeight = '500';

    tools.render(toolCont);
    canvas.render(canvasCont, canvasName, canvasWidth, canvasHeight);
});