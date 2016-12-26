var vm = {

    thRenderer: null,
    propertiesRenderer: null,
    tdWithClassRenderer: null,
    quickFactsRenderer: null,
    countyList: null,
    cityList: null,
    propertiesCount: null,
    propertiesTBody: null,

    init: function() {

        var
            markup = '',
            monthlySummary = data.aggregations.monthlySalesSummary(),
            quickFacts;

        this.countyList = $('#county-select');
        this.cityList = $('#city-select');
        this.propertiesList = $('#properties-list');
        this.propertiesCount = $('#propertiesCount');

        this.thRenderer = _.template($('#th-template').html());
        this.tdWithClassRenderer = _.template($('#td-class-name-template').html());
        this.propertiesRenderer = _.template($('#properties-list-template').html());
        this.quickFactsRenderer = _.template($('#high-low-template').html());

        // -- RENDER MONTHLY SALES SUMMARY --
        markup = renderer.renderCollection(data.monthsAbbrev.get(), this.thRenderer);
        $('#sales-by-month-thead tr').html(markup);

        debugger;
        _.each(monthlySummary, function(summary) {
            summary.className =
                (summary.value > data.planTarget) ? 'above-plan' : '';
        });

        markup = renderer.renderCollection(monthlySummary, this.tdWithClassRenderer);
        $('#sales-by-month-tbody tr').html(markup);
        // ------------------------------------

        // -- RENDER PROPERTIES LIST --
        this.renderProperties();
        // ------------------------------------

        // -- RENDER COUNTY LIST --
        _.each(data.properties.getCounties(), function(county) {
            this.countyList.append('<option value="' + county + '">' + county + '</option>');
        }, this);
        // ------------------------------------

        // -- RENDER CITY LIST --
        _.each(data.properties.getCities(), function(city) {
            this.cityList.append('<option value="' + city + '">' + city + '</option>');
        }, this);
        // ------------------------------------

        quickFacts = {
            high: '$' + _.numberWithCommas(data.aggregations.highestPrice()),
            low: '$' + _.numberWithCommas(data.aggregations.lowestPrice()),
            average: '$' + _.numberWithCommas(data.aggregations.averagePrice())
        };

        markup = renderer.render(quickFacts, this.quickFactsRenderer);
        $('#quick-facts-container').html(markup);

        this.processElements();
    },

    renderProperties: function(properties) {

        if (_.isUndefined(properties)) {
            properties = data.properties.get();
        }

        var markup = renderer.renderCollection(properties,
            this.propertiesRenderer);

        this.propertiesList.html(markup);

        this.propertiesList.scrollTop();

        this.propertiesCount.text(_.size(properties));
    },

    filterList: function() {
        var properties, filter = {};

        if (this.countyList.prop('selectedIndex') !== 0) {
            filter.county = this.countyList.val();
        }

        if (this.cityList.prop('selectedIndex') !== 0) {
            filter.city = this.cityList.val();
        }

        if (!_.isEqual(filter, {})) {
            properties = data.properties.filterBy(filter);
            this.renderProperties(properties);
        }
    },

    clearFilter: function() {
        this.renderProperties();

        this.countyList.prop('selectedIndex', 0);
        this.cityList.prop('selectedIndex', 0);
    },

    popSentMessage: function(){
        var msg = $('#sent-msg');
        
        msg.fadeIn(function(){
            msg.fadeOut(1000);
        });
    },

    sendToMarketing: function() {
        var properties = _(data.properties.get()).map(function(property) {
                    return _.omit(property,
                                'description', 'squarefeet',
                                'imageURL', 'county', 'bedrooms',
                                'bathrooms');
        });

        this.popSentMessage();

        console.log('Send trimmed down properties to marketing.');
    },

    sendToManager: function() {
        var properties = _(data.properties.get()).map(function(property) {
            return _.pick(property, 'id', 'price');
        });

        this.popSentMessage();

        console.log('Send trimmed down properties to manager.');
    },

    processElements: function() {
        $('table').addClass('table').addClass('table-bordered');

        this.propertiesList.on('click', 'a[href="#"]', function(e) {
            e.preventDefault();
            alert('Sorry, not implemented ;)');
            return false;
        });

        $('#filter-apply-button').click(this.filterList);
        $('#filter-clear-button').click(this.clearFilter);

        $('#send-to-marketing-button').click(this.sendToMarketing);
        $('#send-to-manager-button').click(this.sendToManager);

        $('.defer').fadeIn(1000);
    }
};