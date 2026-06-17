(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function initScene(scene) {
    if (reduceMotion.matches) {
      return;
    }

    var layers = Array.prototype.slice.call(scene.querySelectorAll("[data-parallax-layer]"));
    var pointer = { x: 0, y: 0 };
    var rect = null;
    var frame = null;

    function render() {
      var rotateX = clamp(pointer.y * -8, -8, 8);
      var rotateY = clamp(pointer.x * 10, -10, 10);

      scene.style.setProperty("--cube-rotate-x", rotateX.toFixed(2) + "deg");
      scene.style.setProperty("--cube-rotate-y", rotateY.toFixed(2) + "deg");

      layers.forEach(function (layer) {
        var depth = Number(layer.getAttribute("data-depth")) || 0.12;
        var x = pointer.x * depth * 48;
        var y = pointer.y * depth * 36;
        layer.style.transform = "translate3d(" + x.toFixed(2) + "px, " + y.toFixed(2) + "px, 0)";
      });

      frame = null;
    }

    function queue() {
      if (!frame) {
        frame = window.requestAnimationFrame(render);
      }
    }

    window.addEventListener("pointermove", function (event) {
      rect = rect || scene.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      queue();
    }, { passive: true });

    window.addEventListener("resize", function () {
      rect = scene.getBoundingClientRect();
    }, { passive: true });
  }

  window.NexHeartParallax = {
    init: function () {
      document.querySelectorAll("[data-parallax-scene]").forEach(initScene);
    }
  };
})();
