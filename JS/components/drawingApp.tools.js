define(['jQuery'], function(jq){

    return {
        render : function(container){
            var testing = jq(document.createElement('div'))
                          .text('howdy');

            container.append(testing);
        }
    }
});