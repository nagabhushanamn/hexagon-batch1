var _mixIns = (function() {
    _.mixin({
        numberWithCommas: function(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },

        sum: function(value, key) {
            var returnValue = 0;

            returnValue = _.reduce(value,
                function(memo, value) {
                    value = _.isNumber(value) ?
                        value : value[key];
                    return memo + value;
                }, 0);

            return returnValue;
        }
    });
}());
