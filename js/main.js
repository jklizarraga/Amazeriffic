var main = function () {
    "use strict";
    var tabNumber;

    for (tabNumber = 1; tabNumber <= 3; tabNumber++) {
        var tabSelector = ".tabs a:nth-child(" + tabNumber + ")";

        $(tabSelector).on("click", function () {
            var tabNumber   = Array.prototype.indexOf.call(this.parentNode.children, this) + 1  ;
            var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span"                       ;
            $(".tabs span").removeClass("active")                                               ;
            $(tabSelector).addClass("active")                                                   ;
            return false;
        });
    }
};

$(document).ready(main);