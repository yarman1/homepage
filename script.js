'use strict';

const state = {
  fps: 20,
  color: "#0f0",
  charset: "BINARYSTUDIO2022",
};

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const data = {
  width: 0,
  height: 0,
  positions: [], 
};

const resize = () => {
  data.width = canvas.width = innerWidth;
  data.height = canvas.height = innerHeight;

  data.positions = new Array(Math.ceil(data.width / 10)).fill(0);
};

window.addEventListener("resize", resize);
resize();

const randomPos = (items) => items[Math.floor(Math.random() * items.length)];

const draw = () => {
  const {width, height, positions} = data;
  const {color, charset} = state;
  ctx.fillStyle = "rgba(0,0,0,.05)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = color;

  for (let i = 0; i < positions.length; i++) {
    const line = positions[i];
    ctx.fillText(randomPos(charset), i * 10, line);
    positions[i] = line >= height || 
      line >= 10000 * Math.random() ? 0 : line + 10;
  }
};

const interval = setInterval(draw, 1000 / state.fps);
