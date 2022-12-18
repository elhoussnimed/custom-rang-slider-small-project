const slideControl = document.querySelector(".slide-control");
const slideNumber = document.querySelector(".slide-number");
const slider = document.querySelector(".slider");
let slideIsActive = false;

slideControl.addEventListener("mousedown", () => {
  slideIsActive = true;
});

slideControl.addEventListener("mouseup", () => {
  slideIsActive = false;
});

// move the slide control
slideControl.addEventListener("mousemove", (e) => {
  const xPosition = e.clientX;
  if (slideIsActive) {
    slideControl.style.left = `${xPosition - slider.offsetLeft}px`;
    slideNumber.style.left = `${xPosition - slider.offsetLeft}px`;

    if (xPosition <= slider.offsetLeft) {
      slideControl.style.left = `0px`;
      slideNumber.style.left = `0px`;
    } else if (xPosition >= slider.clientWidth + slider.offsetLeft) {
      slideControl.style.left = `${slider.clientWidth}px`;
      slideNumber.style.left = `${slider.clientWidth}px`;
    }
    changeSlideNumber();
  }
});

// update slide number
function changeSlideNumber() {
  slideNumber.innerHTML = (parseInt(slideNumber.style.left) / 3).toFixed();
}
