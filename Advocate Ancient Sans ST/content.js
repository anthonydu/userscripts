let includes = ["www.google.com", "www.youtube.com"];

let AdvocateAncientSansST = `
@font-face {
  font-family: AdvocateAncientSansST;
  src: local("AdvocateAncientSansST-ExtraLight");
  unicode-range: U+4E00-9FFF;
  font-weight: 200;
}

@font-face {
  font-family: AdvocateAncientSansST;
  src: local("AdvocateAncientSansST-Light");
  unicode-range: U+4E00-9FFF;
  font-weight: 300;
}

@font-face {
  font-family: AdvocateAncientSansST;
  src: local("AdvocateAncientSansST-Normal");
  unicode-range: U+4E00-9FFF;
  font-weight: 400;
}

@font-face {
  font-family: AdvocateAncientSansST;
  src: local("AdvocateAncientSansST-Regular");
  unicode-range: U+4E00-9FFF;
  font-weight: 500;
}

@font-face {
  font-family: AdvocateAncientSansST;
  src: local("AdvocateAncientSansST-Medium");
  unicode-range: U+4E00-9FFF;
  font-weight: 600;
}

@font-face {
  font-family: AdvocateAncientSansST;
  src: local("AdvocateAncientSansST-Bold");
  unicode-range: U+4E00-9FFF;
  font-weight: 700;
}

@font-face {
  font-family: AdvocateAncientSansST;
  src: local("AdvocateAncientSansST-Heavy");
  unicode-range: U+4E00-9FFF;
  font-weight: 800;
}
`

let styleSheet = document.createElement("style");
styleSheet.setAttribute("id", "advocate-ancient-sans");
styleSheet.setAttribute("type", "text/css");
styleSheet.textContent = AdvocateAncientSansST;

if (includes.includes(window.location.hostname)) {
  document.head.appendChild(styleSheet);
  window.setInterval(() => {
    for (let e of document.querySelectorAll("*")) {
      if (!window.getComputedStyle(e).getPropertyValue("font-family").includes("AdvocateAncientSansST")) {
        e.style.setProperty("font-family", "AdvocateAncientSansST, " + window.getComputedStyle(e).getPropertyValue("font-family"));
      }
    }
  }, 1000)
}