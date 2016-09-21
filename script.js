function callClick(setIt) {
    var iDone = "0"
    for (cc = 0; cc < setIt.length; cc++) {
        if (setIt(cc).href && iDone == "0") {
            location.href = setIt(cc).href
            iDone = "1"
        }
    }
}

var tCell = document.getElementsByTagName('TD');
for (i = 0; i < tCell.length; i++) {
    if (tCell[i].className == "row4") {
        if (tCell[i].innerHTML.match("showforum=")) {
            tCell[i].onclick = function () {
                callClick(this.all);
            };
        }
    }
}
