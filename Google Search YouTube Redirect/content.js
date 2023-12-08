// ==UserScript==
// @name         Google Search YouTube Redirect
// @version      0.1
// @description  Redirect video results from Google Search embedded player to YouTube
// @author       Anthony Du
// @match        https://www.google.com/*
// @icon         https://www.google.com/s2/favicons?domain=www.youtube.com
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => {
        if (window.location.href.includes('#fpstate=ive')) {
            window.location.replace("https://www.youtube.com/watch?v=" + new URL(window.location.href).hash.split('vid:')[1]);
        }
    }, 500);

})();
