(function () {
  "use strict";

  function applyLinks() {
    var links = window.NexHeart && window.NexHeart.links ? window.NexHeart.links : {};
    var playStore = links.playStore || "#";
    var email = links.email || "nexheart1811@gmail.com";

    document.querySelectorAll("[data-play-link]").forEach(function (link) {
      link.setAttribute("href", playStore);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });

    document.querySelectorAll("[data-email-link]").forEach(function (link) {
      link.setAttribute("href", "mailto:" + email);
    });
  }

  function setFeaturedProjectFlag() {
    var project = window.NexHeart && window.NexHeart.projects ? window.NexHeart.projects[0] : null;

    if (project) {
      document.documentElement.setAttribute("data-featured-project", project.id);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLinks();
    setFeaturedProjectFlag();

    if (window.NexHeartParticles) {
      window.NexHeartParticles.init();
    }

    if (window.NexHeartParallax) {
      window.NexHeartParallax.init();
    }

    if (window.NexHeartAnimations) {
      window.NexHeartAnimations.init();
    }

    if (window.NexHeartGallery) {
      window.NexHeartGallery.init();
    }

    window.requestAnimationFrame(function () {
      document.body.classList.add("is-loaded");
    });
  });
})();
