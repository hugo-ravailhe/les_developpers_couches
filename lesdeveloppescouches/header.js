function myMenu() {
    var x = document.getElementById("menu");
    if (x.className === "navi-menu") {
      x.className += " responsive";
    } else {
      x.className = "navi-menu";
    }
    }