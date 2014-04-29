define(['jQuery', '../templates/templates'], function(jq, Templates){

    return {
        render : function(container){
            var options = {
                    tools :  ['line', 'rectangle', 'circle', 'oval','pencil'],
                    opts : ['fill','stroke'],
                    settings : ['linewidth', 'linecap', 'linesize']
                },
                toolTemp = Handlebars.templates['drawingAppTools'];

            container.append(toolTemp(options));
        }
    }
});