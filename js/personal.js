var windowVW = $(window).width()
    function changeImage(newImageUrl) {
        var largeImage = document.getElementById('largeImage');
        largeImage.src = newImageUrl;
    }
    let imgWidth = $('#thumbnails img').width()
    let imgCount = $('#thumbnails img').length
    alert(imgCount)
    $('#thumbnails img:first').addClass('clicked')
    let index = 0

    $('#thumbnails img').click(function(){
        index = $(this).index()
        $('#thumbnails').animate({
            left: imgWidth * index * -1 -5 * index,
        })
        $(this).addClass('clicked')
        $('#thumbnails img').not(this).removeClass('clicked')
    })
    $('#leftIcon').click(function(){
        $('#thumbnails').animate({
            left: 0,
        })
    })
    $('#rightIcon').click(function(){
        $('#thumbnails').animate({
            left: -1*(imgCount-1)*(imgWidth+5),
        })
    })

