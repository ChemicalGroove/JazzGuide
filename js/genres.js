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


// TAB SELECTION

function openTab(evt, genre) {
  var i, tabcontent, options;
  document.getElementById("navTrigger").classList.remove("change");
  var w;
  if (window.innerWidth !== undefined) {
    w = window.innerWidth;
  }
  else {
    w = document.documentElement.clientWidth;
  }
  if (w < 1000)
    document.getElementById("deskNav").style.display = "none";

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  options = document.getElementsByClassName("option");
  for (i = 0; i < options.length; i++){
    options[i].className = options[i].className.replace(" active", "");
  }

  document.getElementById(genre).style.display = "block";
  evt.currentTarget.className += "active";
}


var modal = document.getElementById("modal1");
var span = document.getElementsByClassName("close")[0];

function triggerModal() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
