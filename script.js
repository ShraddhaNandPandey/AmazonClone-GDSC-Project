var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      
      
    },
  });

 

  var sideMenu = document.getElementById('side-menu');
  function openMenu() {
      sideMenu.classList.remove('left-[-250px]');
      sideMenu.classList.add('left-0');
  }

  function closeMenu() {
      sideMenu.classList.remove('left-0');
      sideMenu.classList.add('left-[-250px]');
  }