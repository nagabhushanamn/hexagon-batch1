require([
    "jquery",
    "bootstrap",
    "underscore-min",
    "modernizr",
    "rainbow-custom.min"], function($) {

    $(function() {

        if ($('#result-stub')[0] !== undefined) {
            $('article').append('' +
                '<div class="row-fluid">' +
                '    <div class="span7">' +
                '        <ul class="nav nav-tabs" id="steps"></ul>' +
                '        <div id="elements"></div>' +
                '        <div id="tab-content-container" class="tab-content"></div>' +
                '        <button class="btn-large pull-right" id="run-button">Run <i class="icon-play"></i></button>' +
                '        <div id="clear-button-container" class="pull-right"><a href="#" id="clear-button">Clear</a></div>' +
                '    </div>' +
                '    <div id="result-container" class="span5">' +
                '        <h5 class="muted">Result</h5>' +
                '    </div>' +
                '</div>');
        }
        
        $('body').append('<footer><a href="http://pluralsight.com/courses/html5-fundamentals" target="_blank">HTML5 Fundamentals, Second Edition</a> by <a href="http://twitter.com/craigshoemaker" target="_blank"><img src="/src/img/craig-shoemaker-logo.png" /></a></footer>');

        resetUI();

        var
            blocks = $('script[data-step]'),
            steps = $('#steps'),
            step = 1,
            className = '',
            label = '',
            tabContentContainer = $('#tab-content-container'),
            aliasContainer = $('#aliasContainer'),
            titleElement = $('meta[name="title"]'),
            title = titleElement.attr('content'),
            nolink = titleElement.attr('data-nolink'),
            urlHash = titleElement.attr('data-urlhash'),
            elements = $('#elements'),
            aliasList = $('meta[name="alias"]').attr('content'),
            listingOnlyMessage = '<h4 class="text-info">This code listing is for explanation purposes only and does not produce a value.</h4><p><img src="img/fist-pump-baby.jpg" /></p>',

            changeStep = function(step) {
                var code, container, lines;

                if (!step) {
                    _commands.currentStep++;
                } else {
                    _commands.currentStep = step;
                }

                code = $('script[data-step="' + _commands.currentStep + '"]').text();
                code = code.split('//---')[1];
                lines = code.split('\n');

                for (var i = 0; i < lines.length; i++) {
                    lines[i] = lines[i].replace(/                /, '');
                }

                code = lines.join('\n') + '\n';

                Rainbow.color(code, 'javascript', function(result) {
                    container = $('code#code-step' + _commands.currentStep).html(result);
                });
            };

        _.each(blocks, function(element, index, list) {
            className = step === 1 ? 'active' : '';
            label = element.getAttribute('data-label');

            steps.append('<li class="' +
                className + '"><a href="#step' +
                step + '" data-toggle="tab" data-step="' +
                step + '">' + label + '</li>');

            tabContentContainer.append('' +
                '<div class="tab-pane ' +
                className + '" id="step' +
                step + '"><pre>' +
                '<code id="code-step' +
                step + '" data-language="javascript"></code></pre></div>');

            step++;
        });

        var runCurrentStep = function() {
            clear();
            var scriptBlock = $('script[data-step=' + _commands.currentStep + ']');
            if (scriptBlock.attr('data-listingonly')) {
                logRaw(listingOnlyMessage);
            } else {
                _commands['step' + _commands.currentStep]();
            }
        };

        if (typeof (_commands) !== "undefined") {

            changeStep();

            if (_commands.executeOnLoad) {
                runCurrentStep();
            }

            if (_commands.hideCommandButtons) {
                $('#run-button, #clear-button-container').hide();
            }
        }

        $('#run-button').click(function() {
            runCurrentStep();
        });

        $('#clear-button').click(function(e) {
            e.preventDefault();
            clear();
            return false;
        });

        $('#steps a').click(function(e) {
            e.preventDefault();
            $(this).tab('show');
        })

        $('#steps a[data-step]').click(function() {
            var step = parseInt(this.getAttribute('data-step'), 10);
            changeStep(step);
            clear();
            elements.html('');
        });

        $('article').fadeIn();
    });
});

// Global functions used on each page
var
    log = function(contents) {
        if (_.isArray(contents)) {
            _.each(contents, function(e, i, l) {
                log(e);
            });
        } else {
            logRaw('<li>' + contents + '</li>');
        }
    },

    logProperty = function(obj, key, list) {
        // This function can be called directly or
        // as an iterator. If it's called as an iterator for an array,
        // then the key name is passed in as the context
        // and is used insted of the 'key' argument
        // which at that time will really be the array index.
        var k = (_.isUndefined(list)) ? key : this.toString();
        log(obj[k]);
    },

    logRaw = function(contents) {
        $('#result').append(contents);
    },

    logObject = function(obj) {
        var
            keys = _.keys(obj),
            i = 0,
            markup = '<p>{<br />';

        _.each(obj, function(value, key, list) {
            markup += ' &nbsp;&nbsp;&nbsp;&nbsp;' + key + ': ' + '&quot;' + value + '&quot;';
            markup += (i === keys.length-1) ? '<br/>' : ', <br />';
            i++
        });

        markup += '}</p>'

        logRaw(markup);
    },

    logBold = function(contents) {
        logRaw('<br /><b>' + contents + '</b>');
    },

    logWarning = function(contents) {
        logRaw('<br /><b class="text-error">' + contents + '</b>');
    },

    logSuccess = function(contents) {
        logRaw('<li><span class="text-success"><b>' + contents + '</b></span></li>');
    },

    logFail = function(contents) {
        logRaw('<li><span class="muted">' + contents + '</span></li>');
    },

    existingElements = null,

    resetUI = function() {

        if (existingElements === null) {
            existingElements = $('#result-stub');
            existingElements.detach();
        }

        var markup = existingElements;

        if (markup[0] !== undefined) {
            markup = markup.clone();
            markup = markup[0].outerHTML;
            markup = $(markup);
            markup = markup.removeClass('hidden').attr('id', 'result');
            markup = markup[0].outerHTML;
            $('#result-container').append(markup);
        }
    },

    clear = function() {
        $('#result').remove();
        $('#elements').html('');
        resetUI();
    },
    
    addElement = function(markup) {
        $('#elements').append(markup);
    },
    
    addButton = function(id, text, classNames) {
        $('#elements').append('<button id="' + id + '" class="btn ' + classNames + '">' + text + '</button>');
    };