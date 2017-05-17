function triggerAnim(x) {
    x.classList.toggle("change");
}

function navDisplay() {
    var x = document.getElementById("deskNav");
    if (x.style.display == "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}

/*window.onresize = function() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var x = document.getElementById("navTrigger");
    if (w > 912px) {
        x.style.display: block;
    }
};*/
function navCheck() {
    //var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    //var w = $( window ).width();
    var w;
    if (window.innerWidth !== undefined) {
      w = window.innerWidth;
    }
    else {
      w = document.documentElement.clientWidth;
    }
    var x = document.getElementById("navTrigger");
    var y = document.getElementById("deskNav");
    if (w < 1000) {
      y.style.display = "none";
      x.style.display = "block";
      x.classList.remove("change");
    }
    else {
      y.style.display = "block";
      x.style.display = "none";
    }
}
