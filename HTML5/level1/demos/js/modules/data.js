var data = (function() {
    var
        months = [
            'January', 'February', 'March',
            'April', 'May', 'June', 'July',
            'August', 'September', 'October',
            'November', 'December'
        ],

        planTarget = 7,

        monthsAbbrev = (function(months) {
            var
                result = null,

                get = function() {

                    if (result === null) {
                        result = _.map(months, function(value) {
                            return { value: value.substring(0, 3) };
                        });
                    }

                    return result;
                };

            return {
                get: get
            };
        }(months)),

        properties = (function() {

            var
                data = null,

                filterBy = function(condition) {
                    var filtered = _(this.get()).where(condition);
                    return filtered;
                },

                getCounties = function() {
                    var counties;
                    counties = _.groupBy(this.get(), 'county');
                    counties = _.keys(counties);
                    counties.sort();
                    return counties;
                },

                getCities = function() {
                    var cities;
                    cities = _.groupBy(this.get(), 'city');
                    cities = _.keys(cities);
                    cities.sort();
                    return cities;
                },

                get = function() {
                    if (data === null) {
                        data = $.mockJSON.generateFromTemplate({
                            "properties|200-200": [{
                                "id|+1": 1,
                                "imageURL": "@IMAGE",
                                "streetAddress": "@FIRST_NUMBER@NUMBER@NUMBER@NUMBER @STREET_NAME",
                                "city": "@CITY_NAME",
                                "state": "CA",
                                "zip": "90@NUMBER@NUMBER@NUMBER",
                                "county": "@COUNTY",
                                "bedrooms|2-6": 2,
                                "bathrooms|2-4": 2,
                                "saleMonth|1-12": 1,
                                "saleDay|1-31": 1,
                                "squarefeet|1500-4800": 2000,
                                "price|219000-675000": 250000,
                                "description": "@LETTER_UPPER@LOREM_IPSUM"
                            }]
                        })
                    }

                    return data.properties;
                };

            return {
                get: get,
                getCounties: getCounties,
                getCities: getCities,
                filterBy: filterBy
            }
        }()),

        aggregations = {

            properties: null,

            highestPrice: function() {
                var result;

                result = _.chain(this.properties)
                    .pluck('price')
                    .max()
                    .value();

                return result;
            },

            lowestPrice: function() {
                var result;

                result = _.chain(this.properties)
                    .pluck('price')
                    .min()
                    .value();

                return result;
            },

            averagePrice: function() {
                var
                    result = _.chain(this.properties)
                        .pluck('price')
                        .sum()
                        .value();

                result = result / _.size(this.properties);
                result = Math.round(result);

                return result;
            },

            totalSalesByMonth: function() {
                var results, month = 1;

                results = _.groupBy(this.properties, 'saleMonth');

                _.each(results, function(group) {
                    var
                        sum = _.sum(group, 'price');

                    results[month] = sum;
                    month++;
                });

                return results;
            },

            monthlySalesSummary: function() {
                var
                    totalSales = this.totalSalesByMonth(),

                    monthySummaries = _.map(totalSales, function(value) {
                        var result;

                        result = (value / 10000);
                        result = Math.round(result) / 100;

                        return { value: result };
                    });

                return monthySummaries;
            }
        };

    aggregations.properties = properties.get();

    _.bindAll(aggregations);

    return {
        aggregations: aggregations,
        months: months,
        planTarget: planTarget,
        monthsAbbrev: monthsAbbrev,
        properties: properties
    }
}());