var backgroundColor = "#2D2D2D";
var textColor = "#C7C7C7";
var linkColor = "#8cbdff";
var codeColor = "#000000";

// Root
document.documentElement.style.setProperty("--color-secondary-text", textColor);
document.documentElement.style.setProperty("--color-fg-default", textColor);
document.documentElement.style.setProperty("--color-footer-bg", backgroundColor);
document.documentElement.style.setProperty("--color-code-bg", codeColor);

colorLighter('--color-code-string');
colorLighter('--color-text');
colorLighter('--color-code-tag');
colorLighter('--color-code-attr');

// Texts
document.body.style.color = textColor;

var h1List = Array.prototype.slice.call(document.getElementsByTagName("h1"));
var h2List = Array.prototype.slice.call(document.getElementsByTagName("h2"));
var h3List = Array.prototype.slice.call(document.getElementsByTagName("h3"));
var h4List = Array.prototype.slice.call(document.getElementsByTagName("h4"));
var h5List = Array.prototype.slice.call(document.getElementsByTagName("h5"));
var h6List = Array.prototype.slice.call(document.getElementsByTagName("h6"));

var pList = Array.prototype.slice.call(document.getElementsByTagName("p"));

var textList = new Array(h1List, h2List, h3List, h4List, h5List, h6List, pList);

textList.forEach((element) => {
    if ("style" in element)
        if ("color" in element.style)
            element.style.color = textColor;
});

// Links
var aList = Array.prototype.slice.call(document.getElementsByTagName("a"));

aList.forEach((element) => {
    element.style.color = linkColor;
});

// Buttons
var buttonList = Array.prototype.slice.call(document.getElementsByTagName("button"));

buttonList.forEach((element) => {
    element.style.color = linkColor;
});

// Backgrounds
var headerList = Array.prototype.slice.call(document.getElementsByTagName("header"));

document.body.style.backgroundColor = backgroundColor;

document.getElementById("page").className = "";

var backgroundList = new Array(headerList);

backgroundList.forEach((element) => {
    if ("style" in element)
        if ("backgroundColor" in element.style)
            element.style.backgroundColor = backgroundColor;
});

// Images
var svgList = Array.prototype.slice.call(document.getElementsByTagName("svg"));

var imagesList = new Array(headerList);

imagesList.forEach((element) => {
    if ("style" in element)
        if ("fill" in element.style)
            element.style.fill = textColor;
});

// Functions

function colorLighter(hexValue) {
    var style = getComputedStyle(document.body);

    var convertedColor = hexToLighterHSL(style.getPropertyValue(hexValue).replace("#", ""));

    document.documentElement.style.setProperty(hexValue, convertedColor);
}

function hexToLighterHSL(H) {
    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    if (H.length == 4) {
        r = "0x" + H[1] + H[1];
        g = "0x" + H[2] + H[2];
        b = "0x" + H[3] + H[3];
    } else if (H.length == 7) {
        r = "0x" + H[1] + H[2];
        g = "0x" + H[3] + H[4];
        b = "0x" + H[5] + H[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    if (delta == 0)
        h = 0;
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    else if (cmax == g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0)
        h += 360;

    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    l = 70;

    return "hsl(" + h + "," + s + "%," + l + "%)";
}