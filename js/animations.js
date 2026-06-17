(function () {
  "use strict";

  function initHeader() {
    var header = document.querySelector("[data-site-header]");

    if (!header) {
      return;
    }

    function update() {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initReveal() {
    var elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach(function (element) {
        element.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12
    });

    elements.forEach(function (element) {
      observer.observe(element);
    });
  }

  window.NexHeartAnimations = {
    init: function () {
      initHeader();
      initReveal();
    }
  };
})();
