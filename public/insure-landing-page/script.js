  AOS.init({
    duration: 900,
    offset: 60,
  });


  const mobNav = document.getElementById('mobNav')
  document.getElementById('menuBtn').addEventListener('click', function() {
    const btnType = this.getAttribute('data-type')
    if (btnType === "menu") {
      this.children[0].src = "images/icon-close.svg"
      this.setAttribute('data-type', "close")
      mobNav.style.top = "15%"
    }else{
      this.children[0].src = "images/icon-hamburger.svg"
      this.setAttribute('data-type', "menu")
      mobNav.style.top = "-100%"
    }
  })