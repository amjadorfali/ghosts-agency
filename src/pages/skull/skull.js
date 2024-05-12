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
const button = document.getElementById("book-now");
button.addEventListener("click", onClick);
