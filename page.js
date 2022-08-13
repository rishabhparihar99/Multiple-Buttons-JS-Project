const rgbValues = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

const buttons = document.querySelectorAll("button");

function func() {
  this.style.backgroundColor = rgbValues();
  this.style.color = rgbValues();
}

for (let button1 of buttons) {
  button1.addEventListener("click", func);
}
