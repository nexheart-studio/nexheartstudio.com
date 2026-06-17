(function () {
  "use strict";

  var items = [];
  var activeIndex = 0;
  var lightbox = null;
  var image = null;

  function render() {
    var item = items[activeIndex];

    if (!item || !image) {
      return;
    }

    image.setAttribute("src", item.src);
    image.setAttribute("alt", item.alt);
  }

  function open(index) {
    if (!lightbox) {
      return;
    }

    activeIndex = index;
    render();
    lightbox.hidden = false;
    document.body.classList.add("is-locked");

    var closeButton = lightbox.querySelector(".lightbox-close");
    if (closeButton) {
      closeButton.focus();
    }
  }

  function close() {
    if (!lightbox) {
      return;
    }

    lightbox.hidden = true;
    document.body.classList.remove("is-locked");
  }

  function move(direction) {
    activeIndex = (activeIndex + direction + items.length) % items.length;
    render();
  }

  function refreshItems() {
    items = Array.from(document.querySelectorAll("[data-gallery-index] img")).map(function (img) {
      return {
        src: img.getAttribute("src"),
        alt: img.getAttribute("alt") || ""
      };
    });
    render();
  }

  function init() {
    lightbox = document.querySelector("[data-lightbox]");
    image = document.querySelector("[data-lightbox-image]");

    if (!lightbox || !image) {
      return;
    }

    refreshItems();

    document.querySelectorAll("[data-gallery-index]").forEach(function (button) {
      button.addEventListener("click", function () {
        open(Number(button.getAttribute("data-gallery-index")) || 0);
      });
    });

    lightbox.querySelectorAll("[data-lightbox-close]").forEach(function (button) {
      button.addEventListener("click", close);
    });

    var previous = lightbox.querySelector("[data-lightbox-prev]");
    var next = lightbox.querySelector("[data-lightbox-next]");

    if (previous) {
      previous.addEventListener("click", function () {
        move(-1);
      });
    }

    if (next) {
      next.addEventListener("click", function () {
        move(1);
      });
    }

    document.addEventListener("keydown", function (event) {
      if (lightbox.hidden) {
        return;
      }

      if (event.key === "Escape") {
        close();
      }

      if (event.key === "ArrowLeft") {
        move(-1);
      }

      if (event.key === "ArrowRight") {
        move(1);
      }
    });

    window.addEventListener("nexheart:languagechange", refreshItems);
  }

  window.NexHeartGallery = {
    init: init
  };
})();
