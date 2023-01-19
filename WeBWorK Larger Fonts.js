// ==UserScript==
// @name         WeBWorK Larger Fonts
// @description  Enlarges problem body font size to 20px
// @author       anthonydu
// @include      https://webwork.*
// @grant        none
// @icon         https://webwork.maa.org/favicon.ico
// ==/UserScript==

document.getElementById("output_problem_body").style.fontSize = "20px";
