function subNav() {
  var x = document.getElementById("cc-sub-nav");
  if (x.className === "sub-nav") {
      x.className += " responsive";
  } else {
      x.className = "sub-nav";
  }
}