function move(y, w, v) {
  var x = document.getElementById(w).style.left;
  var z = parseInt(document.getElementById(v).innerHTML);
  document.getElementById(w).style.left = parseInt(x.slice(0, -2)) - y + "px";
  z += y/50;
  document.getElementById(v).innerHTML = z
}

function show(x, y, z) {
  document.getElementById(x).style.display = "block"
  document.getElementById(y).style.display = "none"
  document.getElementById(z).style.display = "block"
}

function hide(x, y, z) {
  document.getElementById(x).style.display = "none"
  document.getElementById(y).style.display = "none"
  document.getElementById(z).style.display = "block"
}