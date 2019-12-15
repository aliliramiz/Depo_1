// jQuery(document).ready(function($) {
//     $('#counter .key').counterUp({
//         delay: 10,
//         time: 1000
//     });
// });

$('#our-client .items').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
});

$("#slider .icons .left").click(function () {
    sliderToLeft();
})

// Right button
$("#slider .icons .right").click(function () {
    sliderToRight();
})

var autoSlider = window.setInterval(function () {
    sliderToRight()
}, 3000);


$("#slider").on("mouseover", function () {
    window.clearInterval(autoSlider);
});

$("#slider").on("mouseout", function () {
    autoSlider = window.setInterval(function () {
        sliderToRight()
    }, 3000);
})

function sliderToRight() {
    sliderText();
    if ($("#slider .show").next().length != 0) {
        $("#slider .show").removeClass("show").next().addClass("show");
    } else {
        $("#slider .show").removeClass("show");
        $(".slider-item:first-child").addClass("show");
    }
}

function sliderToLeft() {
    sliderText();
    if ($("#slider .show").prev().length != 0) {
        $("#slider .show").removeClass("show").prev().addClass("show");
    } else {
        $("#slider .show").removeClass("show");
        $(".slider-item:last-child").addClass("show");
    }
}

// sliderText();
function sliderText() {
    $(".text-slider").children().addClass("d-none");
    setTimeout(function () { $(".text-slider h1").removeClass("d-none").addClass("w3-container w3-center w3-animate-top"); }, 800);
    setTimeout(function () { $(".text-slider h5").removeClass("d-none").addClass("w3-container w3-center w3-animate-bottom"); }, 1200);
    setTimeout(function () { $(".text-slider .buttons").removeClass("d-none").addClass("w3-container w3-center w3-animate-bottom"); }, 1400);
}
sliderText();

var students, courses, teachers, award, j = 0;
    if ($("#statics").length == 1) {
        var statics = $("#statics").position().top;
    };

    $(window).scroll(function (e) {
        if ($("html").scrollTop() > statics - 660) {
            if (j == 0) {
                students = setInterval(function () {
                    if (j > 1800) {
                        clearInterval(students);
                        $("#statics .students").text("1800+");
                    } else {
                        j = j + 2;
                        $("#statics .students").text(j + "+");
                    }
                }, 5);

                courses = setInterval(function () {
                    if (j > 1760) {
                        clearInterval(courses);
                        $("#statics .courses").text("70");
                    } else {
                        j = j + 1;
                        $("#statics .courses").text(Math.round(j / 26));
                    }
                }, 8);

                teachers = setInterval(function () {
                    if (j > 1800) {
                        clearInterval(teachers);
                        $("#statics .teachers").text("700+");
                    } else {
                        j = j + 1;
                        $("#statics .teachers").text(Math.round(j / 2.6) + "+");
                    }
                }, 8);

                award = setInterval(function () {
                    if (j > 1800) {
                        clearInterval(award);
                        $("#statics .award").text("1200+");
                    } else {
                        j = j + 2;
                        $("#statics .award").text(Math.round(j / 1.5) + "+");
                    }
                }, 8);
            }
        }
    })
    $("#slider .icons .left").click(function () {
        sliderToLeft();
    })

    // Right button
    $("#slider .icons .right").click(function () {
        sliderToRight();
    })

    var autoSlider = window.setInterval(function () {
        sliderToRight()
    }, 3000);


    $("#slider").on("mouseover", function () {
        window.clearInterval(autoSlider);
    });

    $("#slider").on("mouseout", function () {
        autoSlider = window.setInterval(function () {
            sliderToRight()
        }, 3000);
    })

    function sliderToRight() {
        sliderText();
        if ($("#slider .show").next().length != 0) {
            $("#slider .show").removeClass("show").next().addClass("show");
        } else {
            $("#slider .show").removeClass("show");
            $(".slider-item:first-child").addClass("show");
        }
    }

    function sliderToLeft() {
        sliderText();
        if ($("#slider .show").prev().length != 0) {
            $("#slider .show").removeClass("show").prev().addClass("show");
        } else {
            $("#slider .show").removeClass("show");
            $(".slider-item:last-child").addClass("show");
        }
    }

    // sliderText();
    function sliderText() {
        $(".text-slider").children().addClass("d-none");
        setTimeout(function () { $(".text-slider h1").removeClass("d-none").addClass("w3-container w3-center w3-animate-top"); }, 800);
        setTimeout(function () { $(".text-slider h5").removeClass("d-none").addClass("w3-container w3-center w3-animate-bottom"); }, 1200);
        setTimeout(function () { $(".text-slider .buttons").removeClass("d-none").addClass("w3-container w3-center w3-animate-bottom"); }, 1400);
    }
    sliderText();