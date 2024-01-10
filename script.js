"use strict";

const container = document.querySelector(".image-container");

let rows = 5;
for (let i = 0; i < 3 * rows; i++) {
  const URL = `https://source.unsplash.com/random/${randomSize()}x${randomSize()}`;
  const imgEl = document.createElement("img");
  imgEl.src = URL;
  container.appendChild(imgEl);
}

function randomSize() {
  return Math.floor(Math.random() * 10) + 300;
}