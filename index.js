import "./src/pages/skull/skull.js";

const yearSpan = document.getElementById("year");
yearSpan.innerText = new Date().getFullYear();

/** [Read link to understand why the empty object is needed](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#moving_it_to_javascript) */
/**
 * @typedef {Object.<number, (Keyframe[]|PropertyIndexedKeyframes)>} SideAnimationFrames
 *
 */

const upButton = document.querySelectorAll(".up-button");
const downButton = document.querySelectorAll(".down-button");
const pages = upButton.length;
const rotateXTick = 90;
const translateZTick = 50;

/** @type {number | KeyframeAnimationOptions } */
const timing = {
  duration: 300,
  iterations: 1,
  fill: "both",
};

/** @type { {el: Element | null, num: number, rotationX:number, translateZ: number}[] } */
const faceConfig = [];

for (let i = 0; i < pages; i++) {
  faceConfig.push({
    el: document.querySelector(`.f-${i + 1}`),
    num: i + 1,
    // Those are the defaults used in index.css
    rotationX: rotateXTick * i * -1,
    translateZ: translateZTick,
  });
}

/**
 *
 * @param {HTMLElement} button
 */
const addNavigationEvent = button => {
  const isUp = button.classList.contains("up-button");
  const currentNumber = Number(button.attributes.getNamedItem("number")?.value);
  const nextNumber = isUp
    ? currentNumber === 1
      ? pages
      : currentNumber - 1
    : currentNumber === pages
    ? 1
    : currentNumber + 1;
  button.addEventListener("click", onNavigate(nextNumber, isUp));
};

let navigating = false;

/**
 *
 * @param {number} to
 * @param {boolean} isUp
 */
const onNavigate =
  (to, isUp) =>
  /**
   *
   * @param {MouseEvent} _event
   */
  _event => {
    if (navigating) return;
    navigating = true;

    faceConfig.forEach(conf => {
      conf.rotationX = rotateXTick * (isUp ? -1 : 1) + conf.rotationX;

      const animation = conf.el?.animate(
        [
          {
            transform: `rotateX(${conf.rotationX}deg) translateZ(${conf.translateZ}vh)`,
          },
        ],
        timing
      );

      animation.commitStyles();
      animation.onfinish = () => {
        if (conf.num === to) {
          navigating = false;
        }
      };
    });
  };

[...upButton, ...downButton].forEach(addNavigationEvent);
