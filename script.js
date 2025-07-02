const openHam = document.querySelector("#openHam");
const closeHam = document.querySelector("#closeHam");
const navigationItems = document.querySelectorAll(".navigation-item");
const navigationItemsContainer = document.querySelector("#navigation-items");

const hamburgerEvent = (navigation, close, open) => {
  navigationItemsContainer.style.display = navigation;
  closeHam.style.display = close;
  openHam.style.display = open;
};

const navigationEvent = () => {
  navigationItems.forEach((item) => {
    item.addEventListener("click", () => {
        if (closeHam.style.display === "block"){
            navigationItemsContainer.style.display = "none";
            closeHam.style.display = "none";
            openHam.style.display = "block";
        }

    });
  });
};

function setRightNavDisplay() {
  const screenWidth = window.innerWidth;
  const rightNav = document.querySelector(".right-nav");
  screenWidth > 800
    ? (rightNav.style.display = "flex")
    : (rightNav.style.display = "none");
}

openHam.addEventListener("click", () =>
  hamburgerEvent("flex", "block", "none")
);
closeHam.addEventListener("click", () =>
  hamburgerEvent("none", "none", "block")
);
navigationEvent();
window.addEventListener("resize", setRightNavDisplay);

document.addEventListener('DOMContentLoaded', function () {
  var aboutSection = document.getElementById('about');

  // Function to change opacity when the about section is in view
  function changeOpacity() {
    var scrollPosition = window.scrollY;
    var aboutSectionPosition = aboutSection.offsetTop;

    // Adjust this value as needed based on your layout
    var offset = 100;

    if (scrollPosition >= aboutSectionPosition - offset) {
      // Change the opacity of your element here
      // For example, assuming you have an element with ID "yourElement"
      document.getElementById('topnav').style.backgroundColor ='rgba(10, 25, 47, 1)';
      document.getElementById('topnav').style.borderBottom = '1px solid azure';
    } else {
      // Reset the opacity if not in the about section
      document.getElementById('topnav').style.backgroundColor = 'rgba(10, 25, 47, 0.1)';
      document.getElementById('topnav').style.borderBottom = 'rgba(10, 25, 47, 1)';
      document.getElementById('topnav').style.transition = '0.5s';
    }
  }

  // Attach the function to the scroll event
  window.addEventListener('scroll', changeOpacity);

  // Call the function once to set the initial state
  changeOpacity();
});

/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
      "number": {
          "value": 80,
          "density": {
              "enable": true,
              "value_area": 800
          }
      },
      "color": {
          "value": "#ffffff"
      },
      "shape": {
          "type": "circle",
          "stroke": {
              "width": 0,
              "color": "#000000"
          },
          "polygon": {
              "nb_sides": 5
          },
          "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
          }
      },
      "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
          }
      },
      "size": {
          "value": 3,
          "random": true,
          "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
          }
      },
      "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
      },
      "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
          }
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          },
          "onclick": {
              "enable": true,
              "mode": "push"
          },
          "resize": true
      },
      "modes": {
          "grab": {
              "distance": 400,
              "line_linked": {
                  "opacity": 1
              }
          },
          "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
          },
          "repulse": {
              "distance": 200,
              "duration": 0.4
          },
          "push": {
              "particles_nb": 4
          },
          "remove": {
              "particles_nb": 2
          }
      }
  },
  "retina_detect": true
});

// Typing animation for hero job title
window.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.hero-title.typing');
  if (!el) return;
  const fullText = `I'm a <span class="job">Software developer</span>`;
  let i = 0;
  el.innerHTML = '';
  function type() {
    if (i < fullText.length) {
      // Add one character at a time, handling HTML tags
      if (fullText[i] === '<') {
        const closeIdx = fullText.indexOf('>', i);
        el.innerHTML += fullText.slice(i, closeIdx + 1);
        i = closeIdx + 1;
      } else {
        el.innerHTML += fullText[i];
        i++;
      }
      setTimeout(type, 40);
    }
  }
  type();
});

// Project Carousel Functionality
window.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.project-slide');
  const leftArrow = document.querySelector('.carousel-arrow.left');
  const rightArrow = document.querySelector('.carousel-arrow.right');
  const dotsContainer = document.querySelector('.carousel-dots');
  let current = 0;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
    if (dotsContainer) {
      dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === idx);
      });
    }
  }

  // Create dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Go to project ${i + 1}`);
      dot.addEventListener('click', () => {
        current = i;
        showSlide(current);
      });
      dotsContainer.appendChild(dot);
    });
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }
  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  if (leftArrow) leftArrow.addEventListener('click', prevSlide);
  if (rightArrow) rightArrow.addEventListener('click', nextSlide);

  // Optional: swipe support for mobile
  let startX = null;
  const slidesContainer = document.querySelector('.project-slides');
  if (slidesContainer) {
    slidesContainer.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });
    slidesContainer.addEventListener('touchend', (e) => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (dx > 40) prevSlide();
      else if (dx < -40) nextSlide();
      startX = null;
    });
  }

  showSlide(current);
});

// Set footer year dynamically
window.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('footer-year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});



