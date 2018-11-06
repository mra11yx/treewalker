Object.prototype.ev = function (evt, cbk) {
    return this.addEventListener(evt, cbk);
}

Object.prototype.makeEl = function(elem) {
    return document.createElement(elem);
}

Object.prototype.ev = function(evt, cbk) {
    return this.addEventListener(evt, cbk);
}

function a() {
    return document.activeElement;
}

function add(elType) {
    var newEl = document.body.appendChild(makeEl(elType));
    return newEl;
    console.log("new element is: ",newEl);
}

function fakeMake() {
    var el = add("div");
    el.innerText = "Hey!";
}

function qsa(sels) {
    return document.querySelectorAll(sels);
}