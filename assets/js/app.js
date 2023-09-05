$(function () {
    console.log("App ready!");

    $('.zoom-gallery_img').hover(function () {
        $('.zoom-gallery_img').removeClass('active');
        $(this).addClass('active');
    }, function () {
        $('.zoom-gallery_img').removeClass('active');
    }
    );


});