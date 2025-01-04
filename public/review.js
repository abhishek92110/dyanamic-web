document.addEventListener("DOMContentLoaded", () => {

    const slidesContainer = document.querySelector(".slides-container");


const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.crousel-prev-btn');
const nextBtn = document.querySelector('.crousel-next-btn');

console.log("slides review =",slides)

let currentIndex = 0;
const slidesToShow = 3;
const totalSlides = document.querySelectorAll('.slide').length;
const maxIndex = Math.ceil(totalSlides / slidesToShow) - 1;




// Adjust the number of slides based on window width
function updateSlidesToShow() {
  if (window.innerWidth <= 768) {
    return 1;
  } else if (window.innerWidth <= 1024) {
    return 2;
  } else {
    return 3;
  }
}

let currentSlidesToShow = updateSlidesToShow();

// Event Listeners for Navigation Buttons
prevBtn.addEventListener('click', () => {

    container.scrollBy({
        left: -scrollTitleAmount,
        behavior: "smooth", // Enables smooth scrolling
    });

//   currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
//   updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
  updateCarousel();
});

// Update Carousel Position
function updateCarousel() {
  const slideWidth = document.querySelector('.slide').clientWidth + 20; // Slide width + margin
  slides.style.transform = `translateX(-${currentIndex * (slideWidth * currentSlidesToShow)}px)`;
}

// Update slidesToShow on window resize
window.addEventListener('resize', () => { 
  currentSlidesToShow = updateSlidesToShow();
  // Recalculate maxIndex
  const newMaxIndex = Math.ceil(totalSlides / currentSlidesToShow) - 1;
  if (currentIndex > newMaxIndex) {
    currentIndex = newMaxIndex;
    updateCarousel();
  }
});

// Initialize Carousel
updateCarousel();

const content = document.getElementById('content');
const readMore = document.getElementById('readMore');

readMore.addEventListener('click', () => {
  content.classList.toggle('expanded');
  if (content.classList.contains('expanded')) {
    readMore.textContent = 'Read Less';
  } else {
    readMore.textContent = '...Read More';
  }
});

})

function openPopup() {
    const popup = document.querySelector(".popup"); 
    popup.style.display = "flex";
}

function closePopup() {
    const popup = document.querySelector(".popup"); 
    popup.style.display = "none"; 
}


