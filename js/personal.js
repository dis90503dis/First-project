$(document).ready(function() {
    var windowVW = $(window).width();
    var imgWidth = $('#thumbnails img').width();
    var imgCount = $('#thumbnails img').length;

    if (windowVW > 768) {
        $('#thumbnails img').click(function() {
            var newImageUrl = $(this).attr('src');
            $('#largeImage').attr('src', newImageUrl);
        });
        $('#thumbnails img:first').addClass('clicked');
        
        var index = 0;

        $('#thumbnails img').click(function() {
            index = $(this).index();
            $('#thumbnails').animate({
                left: imgWidth * index * -1 - 5 * index,
            });
            $(this).addClass('clicked').siblings().removeClass('clicked');
        });

        $('#leftIcon').click(function() {
            index = (index - 1 + imgCount) % imgCount;
            var newImageUrl = $('#thumbnails img').eq(index).attr('src');
            $('#thumbnails').animate({
                left: imgWidth * index * -1 - 5 * index,
            });
            $('#largeImage').attr('src', newImageUrl);
            $('#thumbnails img').eq(index).addClass('clicked').siblings().removeClass('clicked');
        });
        $('#rightIcon').click(function() {
            index = (index + 1) % imgCount;
            var newImageUrl = $('#thumbnails img').eq(index).attr('src');
            $('#thumbnails').animate({
                left: imgWidth * index * -1 - 5 * index,
            });
            $('#largeImage').attr('src', newImageUrl);
            $('#thumbnails img').eq(index).addClass('clicked').siblings().removeClass('clicked');
        });
    } else {
        $('#thumbnails img').click(function() {
            var newImageUrl = $(this).attr('src');
            $('#lightboxImage').attr('src', newImageUrl);
            $('#liGhtbox').addClass('show'); // Assuming you have a class for showing the lightbox
        });

        $('#leftIcon').click(function() {
            $('#thumbnails').animate({
                left: imgWidth,
            });
        });

        $('#rightIcon').click(function() {
            $('#thumbnails').animate({
                left: -1 * imgWidth,
            });
        });
    }
});
