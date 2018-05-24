$(document).ready(function () {
    $(".sliderDown").click(function () {
        $(this).next().slideToggle(300)
        $(this).toggleClass("slidedDown")
    })

    $(".projectFeedWrapper").click(function () {
        $(this).next().slideToggle(300)
    })

    $(".byMonths").click(function () {
        $(this).parent().next().children().attr("src", "img/chart/chartByMonths.png")
        $(this).siblings(".borderBottom").css("left", "42%")
    })
    $(".byDays").click(function () {
        $(this).parent().next().children().attr("src", "img/chart/chartByDays.png")
        $(this).siblings(".borderBottom").css("left", "10%")
    })
    $(".byYears").click(function () {
        $(this).parent().next().children().attr("src", "img/chart/chartByYears.png")
        $(this).siblings(".borderBottom").css("left", "74%")
    })

    $(".inputSliderDown .fa-chevron-down").click(function () {
        $(this).parent().next().slideToggle(300);
        $(this).toggleClass("chevronUp");
    })

    $(".inputSliderDown .fa-times").click(function () {
        $(this).parent().parent().fadeOut(100);

    })


})




