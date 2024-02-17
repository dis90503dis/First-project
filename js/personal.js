$(document).ready(function() {

    var windowVW = $(window).width();
    var imgWidth = $('#thumbnails img').width();
    var imgCount = $('#thumbnails img').length;
    var index = 0;
    var maxRight = imgCount * -1 + 1;
    var i = 0;
    var isAnimating = false;

    $(window).resize(function() {
        windowVW = $(window).width();
        imgWidth = $('#thumbnails img').width();
    });

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
        $('#thumbnails img').click(function() {
            
        });
        $('#leftIcon').click(function() {
            if( 0 > i ){
                i = i + 1
                $('#thumbnails').animate({
                    left: i * imgWidth,
                });
            }
        });
        $('#rightIcon').click(function() {
            if( i > maxRight ){
            i = i - 1
            $('#thumbnails').animate({
                left: i * imgWidth,
            });}
        });
        $("#thumbnails").on("touchstart", function(e) {
            e.preventDefault();
            startX = e.originalEvent.changedTouches[0].pageX;
            startY = e.originalEvent.changedTouches[0].pageY;
        });
        
        $("#thumbnails").on("touchmove", function(e) {
            e.preventDefault();
            moveEndX = e.originalEvent.changedTouches[0].pageX;
            moveEndY = e.originalEvent.changedTouches[0].pageY;
            X = moveEndX - startX;
            Y = moveEndY - startY;
        
            if (!isAnimating) {
                if (Math.abs(X) > Math.abs(Y)+30 && X > 0 && i < 0) {
                    isAnimating = true;
                    i = i + 1;
                    $('#thumbnails').animate({
                        left: i * imgWidth,
                    }, function() {
                        isAnimating = false;
                    });
                } else if (Math.abs(X) > Math.abs(Y)+30 && X < 0 && i > maxRight) {
                    isAnimating = true;
                    i = i - 1;
                    $('#thumbnails').animate({
                        left: i * imgWidth,
                    }, function() {
                        isAnimating = false;
                    });
                }
            }
        });
    }
});
