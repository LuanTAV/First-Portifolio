$(document).ready(function () {
    var currentPage = window.location.pathname.split('/').pop();

    $('.navbar-nav .nav-item .nav-link').each(function () {
        var linkPage = $(this).attr('href');
        if (linkPage === currentPage) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
});
