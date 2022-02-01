function mobileMenu() {
  var x = document.getElementById("navigation_menu_area");
  if (x.className === "navigation_menu_area") {
    x.className += " active";
  } else {
    x.className = "navigation_menu_area";
  }
}  