'use strict';

/**
 * navbar toggle
 */

// const overlay = document.querySelector("[data-overlay]");
// const navOpenBtn = document.querySelector("[data-nav-open-btn]");
// const navbar = document.querySelector("[data-navbar]");
// const navCloseBtn = document.querySelector("[data-nav-close-btn]");
// const navLinks = document.querySelectorAll("[data-nav-link]");

// const navElemArr = [navOpenBtn, navCloseBtn, overlay];

// const navToggleEvent = function (elem) {
//   for (let i = 0; i < elem.length; i++) {
//     elem[i].addEventListener("click", function () {
//       navbar.classList.toggle("active");
//       overlay.classList.toggle("active");
//     });
//   }
// }

// navToggleEvent(navElemArr);
// navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

/* clip hover play */ 
const clip = document.querySelectorAll('.clip');
for (let i =0;i<clip.length; i++){
  clip[i].addEventListener('mouseenter',function(e){
    clip[i].play()
  })
  clip[i].addEventListener('mouseout',function(e){
    clip[i].pause()
  })
}

// NAV BAR CONTROLS CODE
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.menu-list');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');
    menuBtn.onclick = ()=> {
    menu.classList.add('active');
    menuBtn.classList.add('hide');
  }
    cancelBtn.onclick = ()=>{
    menu.classList.remove('active');
    menuBtn.classList.remove('hide');
  }
  window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
  }