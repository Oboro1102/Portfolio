$(document).ready(function () {

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
    $('#back-to-top,#logo').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    /*連結轉跳*/
    $('.smooth_hash').on("click", function () {
        if ($("#navarea").hasClass("show-animate")) {
            $('html,body').animate({
                scrollTop: $($(this).attr("href")).offset().top - 50
            }, 500);
        } else {
            $('html,body').animate({
                scrollTop: $($(this).attr("href")).offset().top - 120
            }, 500);
        }
        return false;
    });

});
