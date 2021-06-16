$(function() {
    var width = (parseInt($(".carrosel .item").outerWidth() + parseInt($(".carrosel .item").css("margin-right")))) * $(".carrosel .item").length;

    $(".carrosel").css("width", width);


    var numImages = 2;
    var MarginPadding = 30;

    var ident = 0;
    var count = ($(".carrosel .item").length / numImages) - 1;
    var slide = (numImages * MarginPadding) + ($(".carrosel img").outerWidth());


    $(".forth").on("click", function() {
        if (ident < count) {
            ident++;
            $(".carrosel").animate({
                "margin-left": "-=" + slide + "px"
            }, "500");
        }

    });

    $(".back").on("click", function() {

        if (ident >= 1) {
            ident--;
            $(".carrosel").animate({
                "margin-left": "+=" + slide + "px"
            }, "500");
        }
    });

})