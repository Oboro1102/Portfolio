$(document).ready(function () {
    /*導覽列滑動Fixed*/
    $(window).scroll(function () {
        if ($(window).scrollTop() > 70) {
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
});
