$(document).ready(function () {

    // 導覽列滑動Fixed
    $(window).bind("scroll load", function () {
        if ($(this).scrollTop() > 0) {
            $("#navarea").addClass("scroll");
            $("#back_to_top").show("fade", 300);
        } else {
            $("#navarea").removeClass("scroll");
            $("#back_to_top").hide("fade", 300);
        }

        var homeHeight = $("#home").outerHeight();
        if ($(this).scrollTop() > homeHeight) {
            $("#IntroZone").addClass("invisible");
        } else {
            $("#IntroZone").removeClass("invisible");
        }
    });

    // 回到頂端動畫
    $("#back_to_top").click(function (e) {
        e.preventDefault;
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    });

    // 平滑轉跳
    $(".smooth_hash").click(function (e) {
        e.preventDefault;
        var navHeight = $(".navbar_list").outerHeight();
        var offsetHeight = $($(this).attr("href")).offset().top - navHeight;
        $('html,body').animate({
            scrollTop: offsetHeight
        }, 500);
    });

    // 按鈕啟動換色
    $(".experience_card_collapse").click(function () {
        $(this).addClass("active");
        var collapseButtonTarget = $(this).data("target");
        $(collapseButtonTarget).on("hidden.bs.collapse", function () {
            var btnActive = $(".experience_card_collapse").filter(".collapsed");
            $(btnActive).removeClass("active");
        });
    });

    // 經歷單一展開
    $("#experience").bind("show.bs.collapse collapse", function () {
        $(this).find(".collapse.show").collapse('hide');
    });

});
