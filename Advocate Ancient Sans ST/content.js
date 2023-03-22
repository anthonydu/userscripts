let exclude = ["www.canva.com"];

let AdvocateAncientST = `
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
  font-weight: 300;
}
@font-face {
  font-family: AdvocateAncientSansST;
  src: local("AdvocateAncientSansST-Regular");
  unicode-range: U+4E00-9FFF;
  font-weight: 400;
}
@font-face {
  font-family: AdvocateAncientSansST;
  src: local("AdvocateAncientSansST-Medium");
  unicode-range: U+4E00-9FFF;
  font-weight: 500;
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
  font-weight: 900;
}

@font-face {
  font-family: AdvocateAncientSerifST;
  src: local("AdvocateAncientSerifST-ExtraLight");
  unicode-range: U+4E00-9FFF;
  font-weight: 200;
}
@font-face {
  font-family: AdvocateAncientSerifST;
  src: local("AdvocateAncientSerifST-Light");
  unicode-range: U+4E00-9FFF;
  font-weight: 300;
}
@font-face {
  font-family: AdvocateAncientSerifST;
  src: local("AdvocateAncientSerifST-Normal");
  unicode-range: U+4E00-9FFF;
  font-weight: 300;
}
@font-face {
  font-family: AdvocateAncientSerifST;
  src: local("AdvocateAncientSerifST-Regular");
  unicode-range: U+4E00-9FFF;
  font-weight: 400;
}
@font-face {
  font-family: AdvocateAncientSerifST;
  src: local("AdvocateAncientSerifST-Medium");
  unicode-range: U+4E00-9FFF;
  font-weight: 500;
}
@font-face {
  font-family: AdvocateAncientSerifST;
  src: local("AdvocateAncientSerifST-Bold");
  unicode-range: U+4E00-9FFF;
  font-weight: 700;
}
@font-face {
  font-family: AdvocateAncientSerifST;
  src: local("AdvocateAncientSerifST-Heavy");
  unicode-range: U+4E00-9FFF;
  font-weight: 900;
}
`

let styleSheet = document.createElement("style");
styleSheet.setAttribute("id", "advocate-ancient");
styleSheet.setAttribute("type", "text/css");
styleSheet.textContent += AdvocateAncientST;

if (!exclude.includes(window.location.hostname)) {
  document.head.appendChild(styleSheet);
  window.setInterval(() => {
    for (let e of document.querySelectorAll("*")) {
      let computedFont = window.getComputedStyle(e).getPropertyValue("font-family");
      if (!computedFont.includes("AdvocateAncient")) {
        if (computedFont.includes("sans-serif")) {
          e.style.setProperty("font-family", "AdvocateAncientSansST, " + computedFont);
        } else if (computedFont.includes("serif")) {
          e.style.setProperty("font-family", "AdvocateAncientSerifST, " + computedFont);
        }
        console.log(window.getComputedStyle(e).getPropertyValue("font-family"));
      }
    }
  }, 125);
}
