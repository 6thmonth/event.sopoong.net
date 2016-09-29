$( document ).ready(function() {

// Little Canvas things
"use strict";

var canvas = document.querySelector("#canvas-bubble"),
ctx = canvas.getContext("2d");

// Set Canvas to be window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Configuration, Play with these
var config = {
    particleNumber: 50,
    maxParticleSize: 15,
    maxSpeed: 2,
    colorVariation: 30
};

// Colors
var colorPalette = {
    bg: { r: 153, g: 255, b: 102 },
    matter: [{ r: 36, g: 18, b: 42 }, // darkPRPL
    { r: 255, g: 204, b: 0 }, // rockDust
    { r: 237, g: 36, b: 55 }, // solorFlare
    { r: 210, g: 90, b: 255 } // totesASun
    ]
};

// Some Variables hanging out
var particles = [],
    centerX = canvas.width / 2,
    centerY = canvas.height / 2,
    drawBg,

// Draws the background for the canvas, because space
drawBg = function drawBg(ctx, color) {
    ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.globalAlpha=0.9;   
};

// Particle Constructor
var Particle = function Particle(x, y) {
    // X Coordinate
    this.x = x || Math.round(Math.random() * canvas.width);
    // Y Coordinate
    this.y = y || Math.round(Math.random() * canvas.height);
    // Radius of the space dust
    this.r = Math.ceil(Math.random() * config.maxParticleSize);
    // Color of the rock, given some randomness
    this.c = colorVariation(colorPalette.matter[Math.floor(Math.random() * colorPalette.matter.length)], true);
    // Speed of which the rock travels
    this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), 0.7);
    // Direction the Rock flies
    this.d = Math.round(Math.random() * 360);
};

// Provides some nice color variation
// Accepts an rgba object
// returns a modified rgba object or a rgba string if true is passed in for argument 2
var colorVariation = function colorVariation(color, returnString) {
    var r, g, b, a, variation;
    r = Math.round(Math.random() * config.colorVariation - config.colorVariation / 2 + color.r);
    g = Math.round(Math.random() * config.colorVariation - config.colorVariation / 2 + color.g);
    b = Math.round(Math.random() * config.colorVariation - config.colorVariation / 2 + color.b);
    a = Math.random() + 0.5;
    if (returnString) {
        return "rgba(" + r + "," + g + "," + b + "," + a + ")";
    } else {
        return { r: r, g: g, b: b, a: a };
    }
};

// Used to find the rocks next point in space, accounting for speed and direction
var updateParticleModel = function updateParticleModel(p) {
    var a = 180 - (p.d + 90); // find the 3rd angle
    p.d > 0 && p.d < 180 ? p.x += p.s * Math.sin(p.d) / Math.sin(p.s) : p.x -= p.s * Math.sin(p.d) / Math.sin(p.s);
    p.d > 90 && p.d < 270 ? p.y += p.s * Math.sin(a) / Math.sin(p.s) : p.y -= p.s * Math.sin(a) / Math.sin(p.s);
    return p;
};

// Just the function that physically draws the particles
// Physically? sure why not, physically.
var drawParticle = function drawParticle(x, y, r, c) {
    ctx.beginPath();
    ctx.fillStyle = c;
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();
};

// Remove particles that aren't on the canvas
var cleanUpArray = function cleanUpArray() {
    particles = particles.filter(function (p) {
        return p.x > -100 && p.y > -100;
    });
};

var initParticles = function initParticles(numParticles, x, y) {
    for (var i = 0; i < numParticles; i++) {
        particles.push(new Particle(x, y));
    }
    particles.forEach(function (p) {
        drawParticle(p.x, p.y, p.r, p.c);
    });
};

// That thing
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
})();

// Our Frame function
var frame = function frame() {
    // Draw background first
    drawBg(ctx, colorPalette.bg);
    // Update Particle models to new position
    particles.map(function (p) {
        return updateParticleModel(p);
    });
    // Draw em'
    particles.forEach(function (p) {
        drawParticle(p.x, p.y, p.r, p.c);
    });
    // Play the same song? Ok!
    window.requestAnimFrame(frame);
};

// First Frame
frame();

// First particle explosion
initParticles(config.particleNumber);
    
var myFunction = function() {
    var x = Math.floor((Math.random() * 1000) + 1);
    var y = Math.floor((Math.random() * 800) + 1);
    cleanUpArray();
    initParticles(config.particleNumber, x, y);
};

setInterval(myFunction, 5000); // call every 5000 milliseconds

});