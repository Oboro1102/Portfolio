/*連結轉跳*/
$('#home-click').click(function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('#home').offset().top
    }, 1000);
});
$('#about-click').click(function (e) {
    var barH = $("#customenavbar").height();
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('#about').offset().top - barH
    }, 1000);
});
$('#experience-click').click(function (e) {
    var barH = $("#customenavbar").height();
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('#experience').offset().top - barH
    }, 1000);
});
$('#skill-click').click(function (e) {
    var barH = $("#customenavbar").height();
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('#skill').offset().top - barH
    }, 1000);
});
$('#workcollection-click').click(function (e) {
    var barH = $("#customenavbar").height();
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('#workcollection').offset().top - barH
    }, 1000);
});

