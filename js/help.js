$(document).ready(function() {
    var windowVW = $(window).width();
    var simplyPutStep = $('#simplyPutStep');
    var simplyPutContainer = $('#simplyPutContainer');

    if (windowVW > 768) {
        simplyPutStep.css('display', 'none');
        simplyPutContainer.css('display', 'flex');
    } else {
        simplyPutStep.css('display', 'block');
        simplyPutContainer.css('display', 'none');
    }
});
