const box = document.querySelector('.typing');
const text = [
  "The easiest way for a cyborg to offer the proof is for him to demonstrate that he is not bound by the Three Laws of Robotics. Since the Three Laws enforce socially acceptable behavior, this means he must demonstrate that he is capable of human (i.e. nasty) behavior.",
  "If you work hard and stay in line, the machines feed you and keep you warm and alive.",
  "The moment is God's will. Life reveals itself only to the conscious. The disharmony is in the robot mind's desire to control life to suit its individual interests - an impossibility; but you keep trying."
];
let wordIndex = 0;
let textIndex = 0;
let oldTime = 0;
const speed = 60; 
const stop = 2000; 
let activeDOMElement = box;

const typing = (newTime) => {
  if (newTime - oldTime > speed) {
    const letter = text[textIndex].substr(wordIndex, 1);
    if (wordIndex === text[textIndex].length - 1) {
      if (textIndex === text.length - 1) {
        return;
      }
      return setTimeout(() => {
        box.textContent = "";
        textIndex++
        wordIndex = 0;
        requestAnimationFrame(typing)
      }, stop)

    } else if (wordIndex === 0 || letter === "^") {
      const p = document.createElement('p');
      box.appendChild(p);
      activeDOMElement = p;
    }

    if (!(letter === "^")) {
      activeDOMElement.textContent += letter;
    }

    oldTime = newTime;
    wordIndex++;
  }
  requestAnimationFrame(typing);

}

typing()
