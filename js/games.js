(function () {
  "use strict";

  window.NexHeart = window.NexHeart || {};

  window.NexHeart.links = {
    playStore: "https://play.google.com/store/apps/details?id=com.BusHidoStudio.BounceCube",
    privacy: "privacy-policy.html",
    email: "nexheart1811@gmail.com"
  };

  window.NexHeart.projects = [
    {
      id: "bounce-cube",
      title: "Bounce Cube",
      status: "released",
      platform: "Google Play",
      version: "1.1",
      icon: "assets/images/bounce-cube-icon.png",
      preview: "assets/screenshots/screenshot-2.png",
      screenshots: [
        "assets/screenshots/screenshot-1.png",
        "assets/screenshots/screenshot-2.png",
        "assets/screenshots/screenshot-3.png",
        "assets/screenshots/screenshot-4.png"
      ]
    },
    {
      id: "internet-cafe-owner",
      title: "Internet Cafe Owner",
      status: "in-development",
      platform: "Future release"
    },
    {
      id: "future-projects",
      title: "Future Projects",
      status: "coming-soon",
      platform: "NexHeart universe"
    }
  ];
})();
