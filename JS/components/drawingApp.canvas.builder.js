define(['jQuery'], function(jq){

    return{
        render : function(container, name, w , h){
            var canvas = jq(document.createElement('canvas'))
                         .attr('id', name)
                         .css({
                            'width'  : w + 'px',
                            'height' : h + 'px'
                         }),
                tempCanvas = jq(document.createElement('canvas'))
                          .attr('id', 'canvasTemp')
                          .css({
                              'width'  : w + 'px',
                              'height' : h + 'px'
                           });

            container.append(canvas, tempCanvas);

        }
    }

});