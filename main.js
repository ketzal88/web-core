function myFunction() {
    var x = document.getElementById("list");
    var y = document.getElementById("button");
    if (x.style.display === "none") {
      x.style.display = "flex";
      y.innerText= 'Ver Menos'
    } else {
      x.style.display = "none";
      y.innerText= 'Ver Más'
    }
  }