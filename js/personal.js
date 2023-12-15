$(document).ready(function() {
    var windowVW = $(window).width();
    var imgWidth = $('#thumbnails img').width();
    var imgCount = $('#thumbnails img').length;
    var index = 0;
    if (windowVW > 768) {
        $('#thumbnails img').click(function() {
            var newImageUrl = $(this).attr('src');
            $('#largeImage').attr('src', newImageUrl);
        });
        $('#thumbnails img:first').addClass('clicked');
        $('#thumbnails img').click(function() {
            index = $(this).index();
            $('#thumbnails').animate({
                left: imgWidth * index * -1 - 5 * index,
            });
            $(this).addClass('clicked').siblings().removeClass('clicked');
        })
        $('#leftIcon').click(function() {
            $('#thumbnails').animate({
                left: 0,
            });
        });
        $('#rightIcon').click(function() {
            $('#thumbnails').animate({
                left: -1 * (imgCount - 1) * (imgWidth + 5),
            });
        });
    }else {
        var i = 0;
        $('#thumbnails img').click(function() {
        });
        $('#leftIcon').click(function() {
            i = i + 1
            $('#thumbnails').animate({
                left:   i * imgWidth,
            });
        });
        $('#rightIcon').click(function() {
            i = i - 1
            $('#thumbnails').animate({
                left: i * imgWidth,
            });
        });
    
    }
});
