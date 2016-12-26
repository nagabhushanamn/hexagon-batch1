var renderer = (function() {

    render = function(data, renderFunction) {
        return renderFunction(data);
    };

    renderCollection = function(collection, renderFunction) {
        var markup = [];

        _(collection).each(function(item) {
            markup.push(renderFunction(item));
        });

        return markup.join('\n');
    };

    return {
        render: render,
        renderCollection: renderCollection
    }
}());