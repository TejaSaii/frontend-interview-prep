const btn = document.querySelector(".btn");
const normalCountEle = document.querySelector(".normal_increment");
const debounceCountEle = document.querySelector(".debounce_increment");
const throttleCountEle = document.querySelector(".throttle_increment");

let normalCount = 0;
let debounceCount = 0;
let throttleCount = 0;

btn.addEventListener("click", () => {
  normalCountEle.innerHTML = ++normalCount;
  myDebounce();
  myThrottle();
});

//debounce
function debounce(callback, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const myDebounce = debounce(() => {
  ++debounceCount;
  debounceCountEle.innerHTML = debounceCount;
}, 800);

const throttle = (callback, delay) => {
    let last = 0;
    return (...args) => {
        let now = new Date().getTime();
        if(now - last < delay) return;
        last = now;
        callback(...args);
    }
}

const myThrottle = throttle(() => {
    ++throttleCount;
    throttleCountEle.innerHTML = throttleCount;
}, 800);