// Websites: wikipedia.org/wiki/

var url = new URL(window.location.href);

if (url.searchParams.get("useskin") !== "vector") {
    url.searchParams.set("useskin", "vector");
    window.location.href = url;
}