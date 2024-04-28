$(document).ready(function () {
    
    $('.carousel-img').click(function () {
        var imgSrc = $(this).attr('src');
        $('#modalImage').attr('src', imgSrc);
        $('#imageModal').modal('show');
    });

});