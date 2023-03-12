if (window.location.href.includes("https://canvas.ubc.ca/courses/105567/modules/items/5148502")) {
  document.querySelector("#tool_form").setAttribute("target", "")
  document.querySelector("#tool_form > div > div.load_tab > div > button").click();
}

if (window.location.href.includes("https://lmslink.bfwpub.com/blti_launches/toolsWidget.php")) {
  document.querySelector("#main > div:nth-child(1) > div > form").setAttribute("target", "");
  document.querySelector("#main > div:nth-child(1) > div > form").submit();
} 