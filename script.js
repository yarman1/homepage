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

