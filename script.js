var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      
      
    },
    loop:true,
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

// sliding product section...............//


const productContainers = [...document.querySelectorAll('.product-container')];

const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainer.forEach((item, i)=> {
  let containerDimension =item.getBoundingClientRect();
  let containerWidth = containerDimension.width;

  nxtBtn[i].addEventListener('click',() => {
    item,scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click',() => {
    item.scrollLeft -= containerWidth;
  })
})
// back to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); 
}

