var dragDrop = (function() {
    var
        targets = $('[data-dnd-role="dropzone"]'),
        draggables = $('[data-dnd-role="draggable"]'),
        _dragTargetClassName = null,
        _dragSourceClassName = null,
        _isDnDTypesSupported = true;

    var
        isDnDTypesSupported = function() {
            return _isDnDTypesSupported;
        },

        cancel = function(e) {
            if (e.preventDefault) {
                e.preventDefault();
            }

            if (e.stopPropigation) {
                e.stopPropigation();
            }

            return false;
        },

        dragStart = function(e) {
            var
                element = $(this),
                effectAllowed = element.attr('data-dnd-effectallowed');

            if (effectAllowed !== undefined) {
                e.dataTransfer.effectAllowed = effectAllowed;
            }

            if (_dragSourceClassName !== null) {
                element.addClass(_dragSourceClassName);
            }

            try {
                e.dataTransfer.setData('text/plain', '');
            } catch (e) {
                _isDnDTypesSupported = false;
            }
        },

        dragEnd = function(e) {
            if (_dragSourceClassName !== null) {
                $('.' + _dragSourceClassName).removeClass(_dragSourceClassName);
            }

            if (_dragTargetClassName !== null) {
                $('.' + _dragTargetClassName).removeClass(_dragTargetClassName);
            }
        },

        dropped = function(e) {
            cancel(e);

            if (_dragTargetClassName !== null) {
                $(this).removeClass(_dragTargetClassName);
            }
        },

        dragOver = function(e) {
            cancel(e);

            var effect = $(this).attr('data-dnd-dropeffect');

            if (effect !== undefined) {
                e.dataTransfer.dropEffect = effect;
            }

            if (_dragTargetClassName !== null) {
                $(this).addClass(_dragTargetClassName);
            }
        },

        dragLeave = function(e) {
            if (_dragTargetClassName !== null) {
                $(this).removeClass(_dragTargetClassName);
            }
        },
        
        setCSSClassNames = function(dragTargetClassName, dragSourceClassName) {
            _dragTargetClassName = dragTargetClassName;
            _dragSourceClassName = dragSourceClassName;
        };

    targets.each(function(index, target) {
        target.addEventListener('drop', dropped, false);
        target.addEventListener('dragenter', cancel, false);
        target.addEventListener('dragover', dragOver, false);
        target.addEventListener('dragleave', dragLeave, false);
    });

    draggables.each(function(index, draggable) {

        $(draggable).prop('draggable', true);

        draggable.addEventListener('dragstart', dragStart, false);
        draggable.addEventListener('dragend', dragEnd, false);
    });

    return {
        setCSSClassNames: setCSSClassNames,
        isDnDTypesSupported: isDnDTypesSupported
    };
})();