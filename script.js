/**
 * Abdullah Aldohaim - Cybersecurity Portfolio
 * Modern JavaScript with ES6+ features
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
  // ===== PRELOADER =====
  const preloader = document.querySelector('.preloader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hide');
    }, 500);
  });
  
  // ===== MOBILE NAVIGATION TOGGLE =====
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Toggle mobile menu
  const toggleMenu = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  };
  
  hamburger.addEventListener('click', toggleMenu);
  
  // Close mobile menu when clicking on a nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (hamburger.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
  
  // ===== ACTIVE NAVIGATION LINK ON SCROLL =====
  const sections = document.querySelectorAll('section[id]');
  
  const scrollActive = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink?.classList.add('active');
      } else {
        navLink?.classList.remove('active');
      }
    });
  };
  
  window.addEventListener('scroll', scrollActive);
  
  // ===== HEADER SCROLL EFFECT =====
  const header = document.querySelector('.header');
  
  const scrollHeader = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', scrollHeader);
  
  // ===== BACK TO TOP BUTTON =====
  const backToTopBtn = document.querySelector('.back-to-top');
  
  const scrollUp = () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('active');
    } else {
      backToTopBtn.classList.remove('active');
    }
  };
  
  window.addEventListener('scroll', scrollUp);
  
  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // ===== TYPING EFFECT =====
  const typedTextElement = document.querySelector('.typed-text');
  if (typedTextElement) {
    const roles = ['Cybersecurity Specialist', 'Penetration Tester', 'Digital Forensics Expert', 'Security Analyst'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 150;
    let erasingDelay = 100;
    let newTextDelay = 2000;
    
    function typeEffect() {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        // Remove character
        typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = erasingDelay;
      } else {
        // Add character
        typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 150;
      }
      
      // If word is complete
      if (!isDeleting && charIndex === currentRole.length) {
        // Pause at end
        typingDelay = newTextDelay;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        // Move to next word
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
      
      setTimeout(typeEffect, typingDelay);
    }
    
    // Start typing effect
    setTimeout(typeEffect, newTextDelay);
  }
  
  // ===== INITIALIZE AOS ANIMATION LIBRARY =====
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
  
  // ===== DARK/LIGHT THEME TOGGLE =====
  const themeToggle = document.querySelector('.theme-toggle');
  const root = document.documentElement;
  
  // Check for saved theme preference
  const currentTheme = localStorage.getItem('theme') || 'dark';
  if (currentTheme === 'light') {
    enableLightMode();
  }
  
  themeToggle.addEventListener('click', () => {
    if (root.style.getPropertyValue('--dark-color') === '#f8f9fa') {
      enableDarkMode();
      localStorage.setItem('theme', 'dark');
    } else {
      enableLightMode();
      localStorage.setItem('theme', 'light');
    }
  });
  
  function enableLightMode() {
    root.style.setProperty('--dark-color', '#f8f9fa');
    root.style.setProperty('--darker-color', '#e9ecef');
    root.style.setProperty('--light-color', '#0a192f');
    root.style.setProperty('--text-color', '#0a192f');
    root.style.setProperty('--text-color-light', '#495057');
    root.style.setProperty('--card-bg', 'rgba(233, 236, 239, 0.8)');
    root.style.setProperty('--navbar-bg', 'rgba(248, 249, 250, 0.95)');
    root.style.setProperty('--gradient-bg', 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
  
  function enableDarkMode() {
    root.style.setProperty('--dark-color', '#0a192f');
    root.style.setProperty('--darker-color', '#020c1b');
    root.style.setProperty('--light-color', '#f8f9fa');
    root.style.setProperty('--text-color', '#e6f1ff');
    root.style.setProperty('--text-color-light', '#8892b0');
    root.style.setProperty('--card-bg', 'rgba(2, 12, 27, 0.8)');
    root.style.setProperty('--navbar-bg', 'rgba(10, 25, 47, 0.95)');
    root.style.setProperty('--gradient-bg', 'linear-gradient(135deg, #0a192f 0%, #112240 100%)');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});