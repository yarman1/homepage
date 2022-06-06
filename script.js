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