window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

window.onscroll = function () {
    let id = "sticky"
    if (window.pageYOffset >= document.getElementById(id).offsetTop) {
        stickIt(id);
    }
    if (!document.documentElement.scrollTop) {
        document.getElementById('img_header').style.marginTop = '96px';
        document.getElementById(id).style.backgroundColor = "";
        document.getElementById(id).style.marginBottom = '100px';
    }
};

function stickIt(id) {
    document.getElementById(id).classList.add("navi");
    let el = document.getElementById(id);
    el.style.zIndex = '999999';
    el.style.textAlign = 'center';
    el.style.width = '100%';
    el.style.backgroundColor = '#fff';
    el.style.position = 'fixed';
    el.style.left = '0';
    el.style.top = '0';
}

function mobileNav() {
    let x = document.getElementById("navheader");
    if (x.className === "mainheader") {
        x.className += "ResponsiveMenu";
    } else {
        x.className = "mainheader";
    }
}