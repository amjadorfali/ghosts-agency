const button = document.getElementById("book-now");
const yearSpan = document.getElementById("year");
// const alertEl = document.getElementById("alert");

const leftEye = document.getElementById("left-eye");
const rightEye = document.getElementById("right-eye");

/**
 * @description onClick
 * @param {MouseEvent} _event
 */
const onClick = _event => {
  leftEye.classList.toggle("confirmation");
  rightEye.classList.toggle("confirmation");
};

button.addEventListener("click", onClick);

yearSpan.innerText = new Date().getFullYear();
