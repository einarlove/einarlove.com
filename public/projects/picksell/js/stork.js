// Created 22 December 2011 as an experiment for learning Javascript

function pixelManiac() {
    var settings = {
        background: "black",
        
        color: Math.round(Math.random() * 255),
        saturation: 50,
        luminance: [20, 70],
        
        boxDimension: 40,
        border: 0,
        shine: false,
        
        animated: true,
        animationSpeed: 20
    };
    var animationInProgress = false,
        animation,
        animationPaused = false,
        pixelHolder = $("#pixelHolder"),
        windowHeight = $(window).height(),
        windowWidth = $(window).width();
    
    function style() {
        var d = "#pixelHolder > div {";
        d += "width:" + settings.boxDimension + "px;";
        d += "height:" + settings.boxDimension + "px;";
        if (settings.border) {
            d += "border-radius:" + settings.border + "px;";
        }
        if (settings.shine) {
            d += "border-top: solid 2px rgba(255,255,255,0.3);";
            d += "border-bottom: solid 2px rgba(0,0,0,0.3);";
            d += "margin: 1px 1px 0 0;";
        }
        var b = "body {";
        b += "background-color:" + settings.background + ";";
        return (b + "}") + d + "}";
    }

    // Insert style declerations in the style tag in the header
    $("#stylish").html(style());
    
    function randomColor() {
        var saturation = settings.saturation,
            lumStart   = settings.luminance[0],
            lumStop    = settings.luminance[1],
            hue        = settings.color;
        if (hue === "random") {
            hue = Math.round(Math.random() * 360);
        }
            luminance = Math.round(Math.random() * (lumStop - lumStart) + lumStart);
        var color = "hsl(" + hue + ", " + saturation + "%, " + luminance + "%)";
        return color;
    }
    
    function createPixel() {
        if (checkWindowHeight("animation")) {
            var pixel = $(document.createElement('div'))
            .css('background-color', randomColor())
            .fadeIn("slow")
            .appendTo(pixelHolder);
            console.log("fycjface");
        }
        else{animationInProgress = false;}
    }
    
    function createMultiplePixels() {
        pixelHolder.empty();
        function getAmount(){
            var t = windowHeight * windowWidth;
            var p = settings.boxDimension * settings.boxDimension;
            t /= p;
            return Math.round(t) + 100;
        }
        amount = getAmount();
        var pixels = '';
        while (amount > 0) {
            pixels += '<div style="background-color:' + randomColor() + '"></div>';
            amount--;
        }
        pixelHolder.html(pixels);
    }

    function animatePixels(){
        createPixel();
        animation = setTimeout(animatePixels, parseInt(settings.animationSpeed, 10));
    }
    //Check window height and stop animation when pixels are overflowing
    function checkWindowHeight(interval) {
        if ((pixelHolder.height() - settings.boxDimension) > windowHeight) {
            clearInterval(interval);
            return false;
        } else {
            return true;
        }
    }
    function updateSettings() {
        change('color', $("#input_color"));
        change('saturation', $("#input_saturation"));
        change('luminance', $("#input_luminance"));
        change('boxDimension', $("#input_boxDimension"));
        change('border', $("#input_border"));
        change('shine', $("#input_shine"));
        change('animationSpeed', $("#input_speed"));
        change('background', $("#input_background"));

        $("#stylish").html(style());

        function change(property, input) {
            var value = input.attr('value');
            if(input.is(':checkbox')){
                if(input.attr("checked"))
                    settings[property] = true;
                else
                    settings[property] = false;

            }
            if (value !== undefined && value !== '' && !input.is(':checkbox')) {
                value = value.replace("px",'').replace("%",'');
                settings[property] = value;
            }
            if($(input).hasClass('ui-slider')){
                range = [$(input).slider("values", 0),$(input).slider("values", 1)]
                settings[property] = range;
            }
        }
    }

    function hide(){
        $('#toolbox').animate({
            "margin-top": -$('#toolbox').height()
        }, 700, function(){
            $('#expand').fadeIn();
        });
    }
    function show(){
        $('#expand').fadeOut('fast');
        $('#toolbox').animate({
            "margin-top": 0
        }, 500);
    }

    // For debugging
    function displaySettings(){
        $('#debug').remove();
        $("body").append($("<div id='debug'>"));
        $("#debug").html(
            "Color: " + settings.color + "<br>" +
            "saturation: " + settings.saturation + "<br>" +
            "luminanceStart: " + settings.luminanceStart + "<br>" +
            "luminanceStop: " + settings.luminanceStop + "<br>" +
            "boxDimension: " + settings.boxDimension + "<br>" +
            "border: " + settings.border + "<br>" +
            "animationSpeed: " + settings.animationSpeed + "<br>" +
            "shine: " + settings.shine + "<br>"
        );
    }


    $("button").on('click', function(){
        updateSettings();
    });
    $("#start").on('click', function() {
        if(!animationPaused){
            pixelHolder.empty();
            hide();
        }
        if(!animationInProgress){
            animatePixels();
            animationInProgress = true;
        }
    });
    
    $("#stop").on('click', function() {
        clearTimeout(animation);
        animationPaused = true;
        animationInProgress = false;
    });
    $("#instant").on('click', function(){
        createMultiplePixels();
    });
    $("#clear").on('click', function(){
        pixelHolder.empty();
        // Recheck window size incase of resizeing
        windowHeight = $(window).height();
    });
    $("#hide").on('click', function(){
        hide();
    });
    $("#expand").on('click', function(){
        show();
    });

    //Create pixels on first loaD
    createMultiplePixels();
    
    (function slide(){
        $("#input_luminance")
        .slider({
            range: true,
            min: 0,
            max: 100,
            values: [20, 70],
            slide : function(event, ui){
                $(this).find("a:nth-of-type(1)").css("background-color", "hsl(0, 0%, "+ui.values[0]+"%)");
                $(this).find("a:nth-of-type(2)").css("background-color", "hsl(0, 0%, "+ui.values[1]+"%)");
                $(this).find("div").css({
                    
                    "background": "-webkit-gradient(linear, left top, right top, from(hsl(0, 0%, "+ui.values[0]+"%)), to(hsl(0, 0%, "+ui.values[1]+"%)))",

                });
            }
        })
    })()
    $("input").change( function() {
        var value = $(this).val();
        console.log(value);
    });
}

//initiate function
$(function() {
    pixelManiac(); 
});