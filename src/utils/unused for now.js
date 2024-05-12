/** Navigation animations */

// .front {
//   background: rgba(90, 90, 90, 0.7);
//   transform: translateZ(100px);
// }

// .top {
//   background: rgba(210, 210, 0, 0.7);
//   transform: rotateX(90deg) translateZ(45vh);
// }
// .bottom {
//   background: rgba(210, 0, 210, 0.7);
//   transform: rotateX(-90deg) translateZ(45vh);
// }

const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
const slidesLength = slides.length;

let activeSlideIndex = 0;

const moveToSlide = swap => {
  if (sliderContainer.classList.contains("slider-locked")) return;

  activeSlideIndex = (activeSlideIndex + swap + slidesLength) % slidesLength;

  sliderContainer.classList.add("slider-locked");

  slides.forEach((slide, index) => {
    slide.classList.toggle("scrolling_active", index === activeSlideIndex);
  });
};

const onTransitionEnd = () => {
  sliderContainer.classList.remove("slider-locked");
};

/**
 *
 * @param {WheelEvent} event
 */
const onWheel = event => {
  const swap = Math.sign(event.deltaY);
  console.log("swap - wheel", swap);
};

/**
 *
 * @param {Event} event
 */
function onScroll(event) {
  // const swap = Math.sign(event.scroll);
  console.log("this.oldScroll", this.oldScroll);
  console.log("this.scrollY", this.scrollY);
  console.log(this.oldScroll > this.scrollY);
  this.oldScroll = this.scrollY;
}

// document.addEventListener("mousewheel", onWheel);
// window.addEventListener("scroll", onScroll);
// sliderContainer.addEventListener("transitionend", onTransitionEnd);
//

// let lastKnownScrollPosition = 0;
// let ticking = false;

// function doSomething(scrollPos) {
//   // Do something with the scroll position
// }

// document.addEventListener("scroll", (event) => {
//   lastKnownScrollPosition = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(() => {
//       doSomething(lastKnownScrollPosition);
//       ticking = false;
//     });

//     ticking = true;
//   }
// });
