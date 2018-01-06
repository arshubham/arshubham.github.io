/*
 * Copyright (c) 2017 Shubham Arora (https://shubhamarora.in)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/* ==================== JavaScript Index ====================
1. Typed JS
2. Recaptcha Validation
3. Page Load animations and Defaults
4. Lazy Load JavaScript
5. Custom Context Menu
6. Social Effect :)
7. ReCaptcha
========================================================== */
/*********** Typed JS ***********/
$(function ($) {
    "use strict";
    $(".element").typed({
        strings: ["a^1000 student.", "a web developer.", "a web designer.", "an app developer.", "a freelancer.", "a geek.", "Shubham Arora."],
        showCursor: 0,
        typeSpeed: 20,
        backDelay: 1500,
        startDelay: 200,
        callback: function () {
            $(".sub-tag").addClass("animated zoomIn").removeClass("hidden-on-load");
        }
    });
});
/*********** Recaptcha Validation ***********/
//noinspection JSUnusedGlobalSymbols
function enableBtn() {
    document.getElementById("resume-download").disabled = !1;
    $("#resume-download").removeClass("not-active");
}
/*********** Page Load animations and Defaults ***********/
"addEventListener" in window && (window.addEventListener("load", function () {
        document.body.className = document.body.className.replace(/\bloading\b/, "")
    }),
    document.body.className += navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? " is-ie" : "",
    $("#resume").addClass("animated slideInUp"),
    $(".main-tag").addClass("animated zoomInUp"));
document.getElementById("resume-download").disabled = !0;
/*********** Lazy Load Javascript ***********/
function downloadJSAtOnload() {
    "use strict";
    var js1 = document.createElement("script");
    js1.src = "https://www.google.com/recaptcha/api.js";
    document.body.appendChild(js1);
    var js2 = document.createElement("script");
    js2.src = "https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.min.js";
    document.body.appendChild(js2);
}
if (window.addEventListener) {
    window.addEventListener("load", downloadJSAtOnload, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", downloadJSAtOnload);
} else {
    window.onload = downloadJSAtOnload;
}
/*********** Custom Context Menu ***********/

$(function () {
    $.contextMenu({
        selector: '.context-menu-one',
        callback: function (key, options) {},
        items: {
            "cut": {
                name: "Cut",
                icon: "fa-cut",
                callback: function (key, options) {
                    var text = window.getSelection().toString();
                    document.execCommand('copy');
                },
                accesskey: "u"
            },
            copy: {
                name: "Copy",
                icon: "fa-copy",
                callback: function (key, options) {
                    var text2 = window.getSelection().toString();
                    document.execCommand('copy');
                },
                accesskey: "c"
            },
            "source": {
                name: "View Source",
                icon: "fa-code",
                callback: function (key, options) {
                    if (navigator.userAgent.match(/Chrome|AppleWebKit/)) {
                        var options = {
                            hashTracking: false
                        };
                        var inst = $('[data-remodal-id=modal_view_source]').remodal(options);
                        inst.open();
                    } else {
                        var options = {
                            hashTracking: false
                        };
                        var inst = $('[data-remodal-id=modal_view_source]').remodal(options);
                        inst.open();
                    }
                },
                accesskey: "s"
            },
            "sep1": "---------",
            "close": {
                name: "Close",
                icon: "fa-close",
                accesskey: "l"
            }
        }
    });
});
$(function () {
    $.contextMenu({
        selector: '.context-menu-two',
        callback: function (key, options) {

        },
        items: {
            "cut": {
                name: "Cut",
                icon: "fa-cut",
                callback: function (key, options) {
                    var text = window.getSelection().toString();
                    document.execCommand('copy');
                },
                accesskey: "u"
            },
            copy: {
                name: "Copy",
                icon: "fa-copy",
                callback: function (key, options) {
                    var text2 = window.getSelection().toString();
                    document.execCommand('copy');
                },
                accesskey: "c"

            },
            "sep1": "---------",
            "close": {
                name: "Close",
                icon: "fa-close",
                accesskey: "l"
            }
        }
    });
});
/*********** Social Effect ***********/
setTimeout(function () {
    $(".twitter").addClass("fa-twitter animated zoomIn")
}, 1100);
setTimeout(function () {
    $(".github").addClass("fa-github animated zoomIn")
}, 1400);
setTimeout(function () {
    $(".google-plus").addClass("fa-google-plus animated zoomIn")
}, 1600);
setTimeout(function () {
    $(".linkedin").addClass("fa-linkedin animated zoomIn")
}, 1900);
setTimeout(function () {
    $(".telegram").addClass(" fa-paper-plane-o animated zoomIn")
}, 2100);
setTimeout(function () {
    $(".envelope").addClass("fa-envelope animated zoomIn")
}, 2400);
setTimeout(function () {
    $(".wordpress").addClass("fa-wordpress animated zoomIn")
}, 2600);
setTimeout(function () {
    $(".reddit").addClass("fa-reddit animated zoomIn")
}, 2900);


/*********** ReCaptcha ***********/

if (matchMedia) {
    var mq = window.matchMedia("(min-width: 500px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

function WidthChange(mq) {
    if (mq.matches) {
        $('#recaptcha').removeAttr('data-size', 'compact');
    } else {
        $('#recaptcha').attr('data-size', 'compact');
    }
}