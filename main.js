function myFunction() {
    var x = document.getElementById("links");
    var y = document.getElementById("nav_log");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    if (y.style.backgroundColor === "") {
    y.style.backgroundColor = "#F8F8F8";
    }
  }