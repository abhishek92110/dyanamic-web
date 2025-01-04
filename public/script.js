
document.addEventListener("DOMContentLoaded", () => {

const carousel = document.getElementById("carousel");
const titleCards = document.querySelectorAll(".title-card");
const curriculumDetails = document.querySelectorAll(".curriculum-details");


titleCards.forEach((data, index)=>{
    data.addEventListener("click",()=>{
        console.log("show details is running")
        curriculumDetails.forEach((detail) => {
            detail.classList.remove("active");
        });
    
        if (curriculumDetails[index]) {
            curriculumDetails[index].classList.add("active");
        }
    })
})


const container = document.querySelector(".curriculum-title-container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// Scroll amount for each button click
let scrollTitleAmount = 200; // Adjust this value for the scroll distance

// Function to toggle visibility of buttons based on scroll position
function updateButtonVisibility() {
    // If scrolled to the left, hide the "prev" button
    if (container.scrollLeft === 0) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block";
    }

    // If scrolled to the right, hide the "next" button
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "block";
    }
}

// Scroll to the left
prevBtn.addEventListener("click", () => {
    container.scrollBy({
        left: -scrollTitleAmount,
        behavior: "smooth", // Enables smooth scrolling
    });
    updateButtonVisibility(); // Update button visibility after scroll
});

// Scroll to the right
nextBtn.addEventListener("click", () => {
    container.scrollBy({
        left: scrollTitleAmount,
        behavior: "smooth", // Enables smooth scrolling
    });
    updateButtonVisibility(); // Update button visibility after scroll
});

// Update button visibility on page load and whenever the user scrolls manually
window.addEventListener("load", updateButtonVisibility);
container.addEventListener("scroll", updateButtonVisibility);


// function showDetails(index) {
   
// }

console.log("curriculum details =",curriculumDetails)

        // Clone the children to make an infinite effect
        const items = [...carousel.children];
        items.forEach(item => {
            const clone = item.cloneNode(true);
            carousel.appendChild(clone);
        });

        let scrollAmount = 0;
        const scrollSpeed = 2; // Adjust this value for speed

        function autoScroll() {
            scrollAmount += scrollSpeed;
            carousel.scrollLeft = scrollAmount;

            // Reset when reaching the end
            if (scrollAmount >= carousel.scrollWidth / 2) {
                scrollAmount = 0;
            }

            requestAnimationFrame(autoScroll);
        }

        autoScroll();

    });



    

      