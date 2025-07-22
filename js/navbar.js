document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const header = document.querySelector(".header_wrapper");
  const togglerIcon = document.querySelector(".navbar-toggler i");
  const brand = document.querySelector(".navbar-brand");

  const path = window.location.pathname;
  const isHome = path.endsWith("index.html") || path === "/" || path.endsWith("/your-folder/index.html");

  // Sticky navbar & color toggle logic
  if (isHome) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        navbar.classList.add("sticky", "bg-white", "scrolled");
        navbar.classList.remove("position-absolute", "navbar-transparent");
        header.classList.add("bg-white");

        // if (togglerIcon) togglerIcon.style.color = "#000";
        if (togglerIcon) {
          togglerIcon.classList.remove("text-white");
          togglerIcon.classList.add("text-dark");
        }
      } else {
        navbar.classList.remove("sticky", "bg-white", "scrolled");
        togglerIcon.classList.add("text-white");
        navbar.classList.add("position-absolute", "navbar-transparent");
        header.classList.remove("bg-white");

        if (togglerIcon) togglerIcon.style.color = "#fff";
        if (brand) {
          brand.classList.remove("text-dark");
          brand.classList.add("text-white");
        }
      }
    });
  } else {
    navbar.classList.add("sticky", "bg-white", "scrolled");
    navbar.classList.remove("position-absolute", "navbar-transparent");
    header.classList.add("bg-white");

    if (togglerIcon) togglerIcon.style.color = "#000";
    if (brand) {
      brand.classList.remove("text-white");
      brand.classList.add("text-dark");
    }
  }

  // Active nav-link highlighting logic
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");

    // Skip if href is empty or a fragment link
    if (!href || href.startsWith("#")) {
      link.classList.remove("active");
      return;
    }

    // Normalize href path and current path
    const linkPath = new URL(href, window.location.origin).pathname.replace(/\/$/, "");
    const currentPath = path.replace(/\/$/, "");

    if (linkPath === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

$(document).on('click', function (event) {
  var $target = $(event.target);
  var isNavbarOpen = $('.navbar-collapse').hasClass('show');
  var isClickInsideNavbar = $target.closest('.navbar-collapse').length > 0 || $target.closest('.navbar-toggler').length > 0;

  if (isNavbarOpen && !isClickInsideNavbar) {
    $('.navbar-toggler').trigger('click');
  }
});