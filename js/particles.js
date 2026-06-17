(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function init() {
    var canvas = document.getElementById("particle-canvas");

    if (!canvas || reduceMotion.matches) {
      return;
    }

    var context = canvas.getContext("2d");
    var particles = [];
    var width = 0;
    var height = 0;
    var density = 0;

    function resize() {
      var ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      density = Math.min(72, Math.max(28, Math.floor(width * height / 26000)));
      particles = Array.from({ length: density }, createParticle);
    }

    function createParticle() {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.7 + 0.7,
        speed: Math.random() * 0.22 + 0.08,
        alpha: Math.random() * 0.48 + 0.16
      };
    }

    function draw() {
      context.clearRect(0, 0, width, height);

      particles.forEach(function (particle) {
        particle.y -= particle.speed;

        if (particle.y < -10) {
          particle.y = height + 10;
          particle.x = Math.random() * width;
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = "rgba(99, 232, 255, " + particle.alpha + ")";
        context.fill();
      });

      window.requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize, { passive: true });
  }

  window.NexHeartParticles = {
    init: init
  };
})();
