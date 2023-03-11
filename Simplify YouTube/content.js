///
/// Boost Source: https://arcboosts.com/boosts/79/simplify-youtube
///

document.addEventListener('yt-navigate-finish', () => {
  if (!window.location.href.includes("watch")) return;

  /* Forces theater mode */
  document.querySelector("#page-manager > ytd-watch-flexy").setAttribute("theater", "true");
  document.querySelector("#page-manager > ytd-watch-flexy").setAttribute("theater-requested_", "true");

  /* Prevents autoplay */
  document.querySelector("#movie_player > div.html5-video-container > video").pause();

  /* Turns off autonav and removes toggle */
  var i = window.setInterval(() => {
    const t = document.querySelector("button.ytp-button[data-tooltip-target-id='ytp-autonav-toggle-button']");
    if (t.getAttribute("aria-label") == "Autoplay is off") {
      t.style.display = "none";
      clearInterval(i);
    } else if (t.getAttribute("aria-label") == "Autoplay is on") {
      t.click();
    }
  }, 500);
})
