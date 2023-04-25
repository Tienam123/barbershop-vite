// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Menu Burger
(() => {
   const mobileMenu = document.querySelector('.js-menu-container');
   const openMenuBtn = document.querySelector('.js-open-menu');
   const closeMenuBtn = document.querySelector('.js-close-menu');
   const closeMenuLink = document.querySelectorAll('.nav-menu-link');

   const toggleMenu = () => {
      const isMenuOpen =
         openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
     
   };
   openMenuBtn.addEventListener('click', toggleMenu);
   closeMenuBtn.addEventListener('click', toggleMenu);
   closeMenuLink.forEach((link) => link.addEventListener("click", toggleMenu));

   // Close the mobile menu on wider screens if the device orientation changes
   window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
   });
})();

"use strict"

document.addEventListener('click', documentClick);

function documentClick(e) {
const targetItem = e.target;
  if (targetItem.closest('.modal-scroll')){
      
    document.documentElement.classList.toggle('is-active');
  }}
