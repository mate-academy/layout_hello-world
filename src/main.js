
const estado = {
  x: 0,
  y: 0,
  active: false
};

function criaDiv(x, y, size, background, borderR, zi) {
  const div = document.createElement('div');
  div.style.position = "absolute";
  div.style.width = size + "px";
  div.style.height = size + "px";
  div.style.marginLeft = x + "px";
  div.style.marginTop = y + "px";
  div.style.borderRadius = `${borderR}%`;
  div.style.transform = "rotate(45deg)";
  div.style.zIndex = zi;
  div.style.background = background;
  return div;
}

function displayBoxes(numBoxes, minSize, maxSize, borderR, zi, vel) {
  let cont = 0;
  let tempX = estado.x;
  let tempY = estado.y;
  const canvas = document.querySelector(".canvas");

  let myTimer = setInterval(function () {
      if (cont > numBoxes && numBoxes != 0) {
          clearInterval(myTimer);
      }
      cont++;

      let size = Math.round(Math.random() * (maxSize - minSize) + minSize);
      let maxLeft = canvas.offsetWidth - (size + 5);
      let maxTop = canvas.offsetHeight - (size + 5);
      let maxX = (tempX + 20) > maxLeft ? maxLeft : tempX + 20;
      let minX = (tempX - 20) < 0 ? 5 : tempX - 20;
      let maxY = (tempY + 20) > maxTop ? maxTop : tempY + 20;
      let minY = (tempY - 20) < 0 ? 5 : tempY - 20;
      const x = Math.round(Math.random() * (maxX - minX) + minX);
      const y = Math.round(Math.random() * (maxY - minY) + minY);
      const r = Math.round(Math.random() * 255);
      const g = Math.round(Math.random() * 255);
      const b = Math.round(Math.random() * 150);
      const myDiv = criaDiv(x, y, size, `rgb(${r},${g},${b})`, borderR, zi);
      canvas.appendChild(myDiv);

      setTimeout(() => myDiv.remove(), vel);
  }, vel);
}

function dp() {
  let vel = Math.round(Math.random() * (150 - 50) + 50);
  displayBoxes(1, 1, 4, 100, 0, vel);
  displayBoxes(2, 1, 4, 0, 3, vel);
}

function eventHandler(vel) {
  if (!estado.active) {
      estado.active = true;
      setTimeout(() => {
          dp();
          estado.active = false;
      }, vel);
  }
}

// Evento mousemove
document.querySelector(".canvas").addEventListener('mousemove', (e) => {
  estado.x = e.clientX;
  estado.y = e.clientY;
  eventHandler(6);
});

// Eventos para dispositivos móveis
document.querySelector(".canvas").addEventListener('touchstart', (e) => {
  estado.x = e.touches[0].clientX;
  estado.y = e.touches[0].clientY;
  eventHandler(0);
});

document.querySelector(".canvas").addEventListener('touchmove', (e) => {
  estado.x = e.touches[0].clientX;
  estado.y = e.touches[0].clientY;
  eventHandler(1);
});

document.querySelector(".canvas").addEventListener('touchend', (e) => {
  estado.active = false;
});

// Evento click
document.querySelector(".canvas").addEventListener('click', (e) => {
  eventHandler(0);
});
