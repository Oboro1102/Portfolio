/*導覽列滑動Fixed*/
$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $('#navarea').addClass('show-animate');
        $('#back-to-top').addClass('show');
    } else {
        $('#navarea').removeClass('show-animate');
        $('#back-to-top').removeClass('show');
    }
});
/* 遮罩&禁止視窗滾動 */
$(".navshow").on("click", function () {
    $(".overlay").show();
    $("body").addClass("windowband");
});
$(".navclose").on("click", function () {
    $(".overlay").hide();
    $("body").removeClass("windowband");
});
/* 遮罩關閉選單 */
$(".overlay").on("click", function () {
    $("button#close-left-menu").click();
});
/* 回到頂端動畫 */
$('#back-to-top').on('click', function () {
    $('html,body').animate({
        scrollTop: 0
    }, 500);
});
/*連結轉跳*/
$('#logo').click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 500);
});
$('.about-click').click(function () {
    var barH = $("#navarea").height();
    $('html,body').animate({
        scrollTop: $('#about').offset().top - barH
    }, 500);
});
$('.experience-click').click(function () {
    var barH = $("#navarea").height();
    $('html,body').animate({
        scrollTop: $('#experience').offset().top - barH
    }, 500);
});
$('.skill-click').click(function () {
    var barH = $("#navarea").height();
    $('html,body').animate({
        scrollTop: $('#skill').offset().top - barH
    }, 500);
});
$('.workcollection-click').click(function () {
    var barH = $("#navarea").height();
    $('html,body').animate({
        scrollTop: $('#workcollection').offset().top - barH
    }, 500);
});
