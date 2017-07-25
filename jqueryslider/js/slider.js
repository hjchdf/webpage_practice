$(function() {
    // set the variables
    // imageSlider div
    var imgSlider = $('.imageSlider'),
        // picture div
        imageBox = imgSlider.children(".imageBox"),
        //title div
        titleBox = imgSlider.children(".titleBox"),
        // all titles (array)
        titleArr = titleBox.children("p"),
        // icon div
        icoBox = imgSlider.children(".icoBox"),
        // all icons (array)
        icoArr = icoBox.children("span"),
        // image width
        imagewidth = imgSlider.width(),
        // number of image
        imageNum = imageBox.children("a").length,
        // picture div width
        imageReelWidth = imagewidth * imageNum,
        // nowtime picture id
        activeID = parseInt(icoBox.children(".active").attr("rel")),
        // next picture id
        nextID = 0,
        // setInterval() function
        setIntervalID,
        // interval time
        intervalTime = 4000,
        // picture animation speed
        imageSpeed = 500,
        // title animation speed
        titleSpeed = 250;

    imageBox.css({'width': imageReelWidth + 'px'});

    // picture slider function
    // the parameter is the id of picture clicked
    var rotate = function(clickID) {
        // judge if clicked the pictuer (icon)
        if (clickID) {
            nextID = clickID;
        }
        else {
            // when rotate automatically
            // judge whether next picture is the next
            // if it is, turn to the first picture
            nextID = activeID <= imageNum - 1 ? activeID + 1 : 1;
        }

        // change the active icon
        // set the icon active nowtime default style
        // set the next icon 'active' class
        $(icoArr[activeID - 1]).removeClass("active");
        $(icoArr[nextID -1]).addClass("active");

        // change the picture title
        $(titleArr[activeID-1]).animate(
            { bottom: "-40px" },
            titleSpeed,
            function() {
                $(titleArr[nextID -1]).animate({ bottom: "0px"}, titleSpeed);
            }
        );

        // change the picture
        imageBox.animate({ left: "-" + (nextID -1) * imagewidth + "px"}, imageSpeed);

        // change the picture id
        activeID = nextID;

    };

    // set the pictures rotate automatically
    setIntervalID = setInterval(rotate, intervalTime);

    // when mouse move above the picture, stop rotate
    // when mouse away from the picture, continue to rotate
    imageBox.hover(function() {
        // stop rotate
        clearInterval(setIntervalID);
    },
        // continue rotate
        function() {
            setIntervalID = setInterval(rotate, intervalTime);
        }
    );

    // click icons to change the picture
    icoArr.on('click', function() {
        // stop rotate
        clearInterval(setIntervalID);

        var clickID = parseInt($(this).attr("rel"));
        rotate(clickID);

        // continue rotate
        setIntervalID = setInterval(rotate, intervalTime);
    });



});
