// ==UserScript==
// @name         WeBWorK Larger Fonts
// @namespace    https://github.com/anthonydu/userscripts
// @description  Enlarges problem body font size to 20px
// @version      0
// @author       Anthony Du
// @include      https://webwork.*
// @icon         https://webwork.maa.org/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementById("output_problem_body").style.fontSize = "20px";
    document.getElementById("site-navigation").style.minWidth = "0";
    document.getElementById("site-navigation").style.maxWidth = "200px";
    document.getElementById("site-navigation").style.transition = "none";
})();
