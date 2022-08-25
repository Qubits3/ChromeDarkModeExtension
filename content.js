var backgroundColor = "#2D2D2D";
var textColor = "#C7C7C7";
var linkColor = "#8cbdff";

// Root
changeProperty("--color-secondary-text", textColor);
changeProperty("--color-fg-default", textColor);
changeProperty("--color-footer-bg", backgroundColor);
changeProperty("--color-code-bg", 'black');

colorLighter('--color-code-string');
colorLighter('--color-text');
colorLighter('--color-code-tag');
colorLighter('--color-code-attr');

// Texts
document.body.style.color = textColor;

changeTextColor(Array.prototype.slice.call(document.getElementsByTagName("h1")));
changeTextColor(Array.prototype.slice.call(document.getElementsByTagName("h2")));
changeTextColor(Array.prototype.slice.call(document.getElementsByTagName("h3")));
changeTextColor(Array.prototype.slice.call(document.getElementsByTagName("h4")));
changeTextColor(Array.prototype.slice.call(document.getElementsByTagName("h5")));
changeTextColor(Array.prototype.slice.call(document.getElementsByTagName("h6")));

changeBackgroundColor(changeTextColor(Array.prototype.slice.call(document.getElementsByTagName("p"))));

// Links
changeTextColor(Array.prototype.slice.call(document.getElementsByTagName("a")), linkColor);

// Buttons
changeTextColor(Array.prototype.slice.call(document.getElementsByTagName("button")), linkColor);

// learn.unity.com
delay(5000).then(() => {
    changeBackgroundColor(Array.prototype.slice.call(document.getElementsByClassName("content-wrap_20RAlglX")), 'black');
    changeBackgroundColor(Array.prototype.slice.call(document.querySelectorAll("div[class^='step_']")));
    changeBackgroundColor(Array.prototype.slice.call(document.querySelectorAll("div[class^='body-wrap_']")));
    changeTextColor(changeBackgroundColor(Array.prototype.slice.call(document.querySelectorAll("div[class^='title-wrap_']"))), 'white');
    changeTextColor(Array.prototype.slice.call(document.querySelectorAll("div[data-contents]")));
});

// erkekadam.org
changeBackgroundColor(Array.prototype.slice.call(document.querySelectorAll("div[id^='comment-']")));
changeBackgroundColor(Array.prototype.slice.call(document.querySelectorAll("textarea[id^='wc-textarea-']")));
changeBackgroundColor(Array.prototype.slice.call(document.getElementsByClassName("wpdiscuz-front-actions")));
changeTextColor(Array.prototype.slice.call(document.getElementsByClassName("comment-author")));

// developer.chrome.com
changeTextColor(changeBackgroundColor(Array.prototype.slice.call(document.getElementsByClassName("aside aside--gotchas"))), 'palevioletred');
changeBackgroundColor(Array.prototype.slice.call(document.getElementsByClassName("aside aside--note")));
changeTextColor(changeBackgroundColor(Array.prototype.slice.call(document.getElementsByClassName("aside aside--warning"))), 'red');
changeBackgroundColor(Array.prototype.slice.call(document.getElementsByClassName("aside aside--caution")));
changeTextColor(changeBackgroundColor(Array.prototype.slice.call(document.getElementsByClassName("aside aside--success"))), 'limegreen');

if(document.URL.includes("erkekadam.org"))
    document.getElementById("page").className = "";

// Backgrounds
changeBackgroundColor(Array.prototype.slice.call(document.getElementsByTagName("header")));

document.body.style.backgroundColor = backgroundColor;

// Images
changeImageColor(Array.prototype.slice.call(document.getElementsByTagName("svg")));

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

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function changeTextColor(array, color = textColor) {
    array.forEach(element => {
        if ("style" in element)
            if ("color" in element.style)
                element.style.color = color;
    });

    return array;
}

function changeBackgroundColor(array, color = backgroundColor) {
    array.forEach(element => {
        if ("style" in element)
            if ("backgroundColor" in element.style)
                element.style.backgroundColor = color;
    });

    return array;
}

function changeImageColor(array) {
    array.forEach((element) => {
        if ("style" in element)
            if ("fill" in element.style)
                element.style.fill = textColor;
    });
}

function changeProperty(property, value){
    document.documentElement.style.setProperty(property, value);
}
