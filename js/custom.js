$(document).ready(function () {
    $(window).bind('scroll', function () {
        var barH = $("#fixednavbar").height();
        var navHeight = $(window).height() - barH;
        if ($(window).scrollTop() > navHeight) {
            $('#fixednavbar').addClass('fixed-top');
        } else {
            $('#fixednavbar').removeClass('fixed-top');
        }
    });
});
$('#home-click').click(function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('#home').offset().top
    }, 700);
});
$('#about-click').click(function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('#about').offset().top
    }, 700);
});
$('#experience-click').click(function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('#experience').offset().top
    }, 700);
});
$('#skill-click').click(function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('#skill').offset().top
    }, 700);
});
$('#workcollection-click').click(function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('#workcollection').offset().top
    }, 700);
});
$('#contact-click').click(function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('#contact').offset().top
    }, 700);
});
