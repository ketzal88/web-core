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
const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    console.log('click')
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-20%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-40%)';
      e.target.classList.add('active');
    }
    else if (e.target.classList.contains('fourth')){
      slides.style.transform = 'translatex(-60%)';
      e.target.classList.add('active');
    }
    else if (e.target.classList.contains('fifth')){
      slides.style.transform = 'translatex(-80%)';
      e.target.classList.add('active');
    }
  }
});
