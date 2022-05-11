const navbar = document.querySelector(".nav");
const navbarToggler = document.querySelector(".navbar-toggler");
const tl = new TimelineLite();
const links = document.querySelectorAll(".nav-links");
const portfolioImgs = document.querySelectorAll("#portfolio img");
var menuOpen = false;

// AOS JS
AOS.init({
  duration: 1000,
  once: true,
});

// Navbar Scroll Animation
function navScrollAnimation() {
  window.addEventListener("scroll", () => {
    const navLogo = document.querySelector(".logo");

    if (window.pageYOffset > 0) {
      navbar.classList.add("activeNavScroll");
    } else {
      navbar.classList.remove("activeNavScroll");
    }
  });
}

// Toggle Navbar Animation
function toggleNavbar() {
  navbarToggler.addEventListener("click", () => {
    if (!menuOpen) {
      menuOpen = true;
      navbarToggler.classList.add("activeToggle");
      navbar.classList.add("activeNavbar");
    } else {
      menuOpen = false;
      navbarToggler.classList.remove("activeToggle");
      navbar.classList.remove("activeNavbar");
    }
  });
}

// Navbar Links, when Navbar is active
links.forEach((e) => {
  e.addEventListener("click", () => {
    if (menuOpen) {
      menuOpen = false;
      navbarToggler.classList.remove("activeToggle");
      navbar.classList.remove("activeNavbar");
    } else {
      menuOpen = true;
      navbarToggler.classList.add("activeToggle");
      navbar.classList.add("activeNavbar");
    }
  });
});

// Landing Page Animation With GSAP
tl.staggerFrom(
  ".nav .logo, .nav ul li",
  2,
  {
    opacity: 0,
  },
  0.1
);

tl.staggerFrom(
  "#home h5, #home h1, #home .btn, #home img",
  1,
  {
    opacity: 0,
  },
  0.1
);

toggleNavbar();
navScrollAnimation();

// JQuery Smooth Scroll
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

portfolioImgs.forEach((e) => {
  e.addEventListener("mouseover", () => {
    document.body.style.background = "#000";
    document.body.style.color = "#fff";
  });

  e.addEventListener("mouseout", () => {
    document.body.style.background = "#fff";
    document.body.style.color = "#000";
  });
});
