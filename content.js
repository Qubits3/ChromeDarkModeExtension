var backgroundColor = "#2D2D2D";
var textColor = "#C7C7C7";

document.body.style.backgroundColor = backgroundColor;
document.body.style.color = textColor;

document.documentElement.style.setProperty("--color-secondary-text", textColor);
document.documentElement.style.setProperty("--color-fg-default", textColor);
document.documentElement.style.setProperty("--color-footer-bg", backgroundColor);
document.documentElement.style.setProperty("--color-code-bg", backgroundColor);

// Texts
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

var aList = Array.prototype.slice.call(document.getElementsByTagName("a"));

aList.forEach((element) => {
    element.style.color = textColor;
});

var buttonList = Array.prototype.slice.call(document.getElementsByTagName("button"));

buttonList.forEach((element) => {
    element.style.color = textColor;
});

// Backgrounds
var headerList = Array.prototype.slice.call(document.getElementsByTagName("header"));

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