; (function () {
    $(function () {
        'use strict';

        $('body').click(function (event) {
            event.preventDefault();
            // if element with "C2cb" was clicked
            if ($(event.target).hasClass('C2cb')) {

                // Read value in data-copy2clipboard
                var value = event.target.dataset.copy2clipboard;
                var range = document.createRange();
                var success = true;
                var selection;

                // Create a temporary element off screen.
                var tmpElem = $('<div>');
                tmpElem.css({
                    position: "absolute",
                    left: "-10000px",
                    top: "-10000px"
                });

                // Add the input value to the temp element.
                tmpElem.text(value);
                $("body").append(tmpElem);

                // Select temp element.
                range.selectNodeContents(tmpElem.get(0));
                selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);

                // Copy begin
                try {
                    success = document.execCommand('copy', false, null);
                }
                catch (e) {
                    alert("Copy failed");
                }

                if (success) {
                    // Build temp message
                    var tmp_msg = $('<button></button>');
                    tmp_msg.text('Copied');
                    tmp_msg.attr('id', 'temp_copied_msg');
                    tmp_msg.css({ 'margin-left': '5px', 'z-index': '999' });

                    // Append message
                    $(event.target).after(tmp_msg);

                    // Remove temp message
                    var wait = setTimeout(function () {
                        $('body').find('#temp_copied_msg').remove();
                    }, 500);

                    // Remove temp element.
                    tmpElem.remove();
                }
            };
        });
    });
})();