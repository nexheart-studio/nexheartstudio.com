(function () {
  "use strict";

  var STORAGE_KEY = "nexheart-lang";
  var DEFAULT_LANG = "en";

  var translations = {
    en: {
      pageTitle: "NexHeart Studio | Indie Game Studio",
      pageDescription: "NexHeart Studio is an independent game studio building polished mobile arcade games, character-driven worlds, and the growing cube universe behind Bounce Cube.",
      privacyPageDescription: "Privacy information for NexHeart Studio games and website.",
      skipLink: "Skip to content",
      navStudio: "Studio",
      navFeatured: "Featured",
      navUniverse: "Universe",
      navScreenshots: "Screenshots",
      navRoadmap: "Roadmap",
      navContact: "Contact",
      headerPlay: "Google Play",
      heroEyebrow: "Independent Game Studio",
      heroTitle: 'We build arcade games with <span class="text-gradient">heart, skill, and strange little cubes</span>.',
      heroMission: "NexHeart Studio is crafting mobile arcade experiences, character-driven systems, and a long-term universe that starts with Bounce Cube.",
      exploreUniverseButton: "Explore the Universe",
      downloadButton: "Get Bounce Cube",
      metricReleased: "Released",
      metricNext: "Next",
      metricFocus: "Focus",
      metricFocusValue: "Arcade universes",
      showcaseEyebrow: "Studio Showcase",
      showcaseTitle: "A small studio building games with a bigger world behind them.",
      showcaseText: "We design mobile games around instantly readable action, satisfying progression, and characters that can grow across projects.",
      showcaseOneTitle: "Arcade-first feel",
      showcaseOneText: "Fast inputs, clean goals, and score-driven replay value.",
      showcaseTwoTitle: "Progression systems",
      showcaseTwoText: "Unlocks, achievements, rewards, and reasons to return.",
      showcaseThreeTitle: "Character identity",
      showcaseThreeText: "Cube heroes, themes, and worlds that stay recognizable.",
      featuredEyebrow: "Featured Game",
      previewAlt: "Bounce Cube gameplay screenshot",
      releasedStatus: "Released",
      featuredDescription: "A fast-paced endless arcade climber where every jump matters. Collect BC cubes, unlock memorable cube characters, chase achievements, and climb the leaderboards.",
      featureCharacters: "40+ unlockable cube characters",
      featureLeaderboards: "Google Play leaderboards and achievements",
      featureRewards: "2X BC rewards and platform themes",
      latestLabel: "Latest Update",
      latestTitle: "Version 1.1 brings Google Play Games, achievements, and global leaderboards.",
      openPlayButton: "Open on Google Play",
      viewGalleryButton: "View Gallery",
      universeEyebrow: "The Cube Universe",
      universeTitle: "One studio, multiple worlds in motion.",
      universeIntro: "Bounce Cube is the beginning. NexHeart Studio is expanding into new games, new systems, and a broader indie catalog.",
      developmentStatus: "In Development",
      comingStatus: "Coming Soon",
      bounceUniverseText: "A skill-based mobile arcade climber and the first public NexHeart release.",
      cafeUniverseText: "A future indie project exploring management, progression, and cozy tech culture.",
      futureProjectsTitle: "Future Projects",
      futureUniverseText: "More cube universe games and experimental indie concepts are planned.",
      screenshotsEyebrow: "Screenshots",
      screenshotsTitle: "A polished mobile arcade world.",
      screenshotsIntro: "Tap any screenshot to open the gallery.",
      screenshotOneAlt: "Bounce Cube character collection screen",
      screenshotTwoAlt: "Bounce Cube gameplay screen",
      screenshotThreeAlt: "Bounce Cube unlockable heroes screen",
      screenshotFourAlt: "Bounce Cube player stats screen",
      roadmapEyebrow: "Roadmap",
      roadmapTitle: "The next phase is bigger than one game.",
      roadmapIntro: "NexHeart Studio is growing toward a wider catalog while continuing to refine the cube universe.",
      roadmapOneTitle: "New updates",
      roadmapOneText: "More polish, tuning, and quality-of-life improvements for released games.",
      roadmapTwoTitle: "More cube characters",
      roadmapTwoText: "New character ideas, themes, and expressive visual identities.",
      roadmapThreeTitle: "New games",
      roadmapThreeText: "Internet Cafe Owner and additional indie projects are part of the long-term plan.",
      roadmapFourTitle: "New platforms",
      roadmapFourText: "Future releases may expand beyond the first mobile launch strategy.",
      aboutEyebrow: "About",
      aboutTitle: "Indie development with a long memory.",
      aboutText: "NexHeart Studio exists to make games that are compact, expressive, and worth returning to. We care about clean feel, visual identity, player progression, and building worlds that can keep expanding.",
      contactEyebrow: "Contact",
      contactTitle: "Business, support, and privacy.",
      contactText: "For studio inquiries, Bounce Cube support, or privacy questions, contact NexHeart Studio directly.",
      emailLabel: "Email",
      businessLabel: "Business",
      businessText: "Publishing, partnerships, press, and platform conversations.",
      supportLabel: "Support",
      supportText: "Game support, privacy requests, and player feedback.",
      lightboxTitle: "Screenshot preview",
      closeLightboxLabel: "Close screenshot preview",
      previousScreenshotLabel: "Previous screenshot",
      nextScreenshotLabel: "Next screenshot",
      footerStudio: "Studio",
      footerUniverse: "Universe",
      footerRoadmap: "Roadmap",
      footerPrivacy: "Privacy Policy",
      footerContact: "Contact",
      footerText: "© 2026 NexHeart Studio. All rights reserved.",
      privacyPageTitle: "Privacy Policy | NexHeart Studio",
      privacyTitle: "Privacy Policy",
      privacyIntro: "This page explains how NexHeart Studio handles privacy for its games and website.",
      privacyUpdated: "Last updated: June 17, 2026",
      privacyDataTitle: "Information we handle",
      privacyDataText: "NexHeart Studio does not use this website to collect personal account data. Game platform features, such as Google Play Games, may process gameplay-related information according to their own policies.",
      privacySupportTitle: "Support contact",
      privacySupportText: "If you contact us by email, we use your message and email address only to respond to your request.",
      privacyThirdPartyTitle: "Third-party services",
      privacyThirdPartyText: "Bounce Cube may use Google Play services for achievements, leaderboards, distribution, and platform features.",
      privacyContactTitle: "Questions",
      privacyContactText: "For privacy questions, contact NexHeart Studio at nexheart1811@gmail.com.",
      privacyBack: "Back to Studio"
    },
    tr: {
      pageTitle: "NexHeart Studio | Bağımsız Oyun Stüdyosu",
      pageDescription: "NexHeart Studio; cilalı mobil arcade oyunları, karakter odaklı dünyalar ve Bounce Cube ile başlayan büyüyen küp evreni geliştiren bağımsız bir oyun stüdyosudur.",
      privacyPageDescription: "NexHeart Studio oyunları ve web sitesi için gizlilik bilgileri.",
      skipLink: "İçeriğe geç",
      navStudio: "Stüdyo",
      navFeatured: "Öne Çıkan",
      navUniverse: "Evren",
      navScreenshots: "Ekranlar",
      navRoadmap: "Yol Haritası",
      navContact: "İletişim",
      headerPlay: "Google Play",
      heroEyebrow: "Bağımsız Oyun Stüdyosu",
      heroTitle: 'Kalbi, yeteneği ve <span class="text-gradient">tuhaf küçük küpleri</span> olan arcade oyunları yapıyoruz.',
      heroMission: "NexHeart Studio; Bounce Cube ile başlayan uzun soluklu bir evren, karakter odaklı sistemler ve mobil arcade deneyimleri geliştiriyor.",
      exploreUniverseButton: "Evreni Keşfet",
      downloadButton: "Bounce Cube'u Al",
      metricReleased: "Yayında",
      metricNext: "Sırada",
      metricFocus: "Odak",
      metricFocusValue: "Arcade evrenleri",
      showcaseEyebrow: "Stüdyo Vitrini",
      showcaseTitle: "Arkasında daha büyük bir dünya olan oyunlar geliştiren küçük bir stüdyo.",
      showcaseText: "Mobil oyunlarımızı ilk anda anlaşılır aksiyon, tatmin edici ilerleme ve projeler arasında büyüyebilen karakterler üzerine tasarlıyoruz.",
      showcaseOneTitle: "Arcade hissi",
      showcaseOneText: "Hızlı girdiler, temiz hedefler ve skor odaklı tekrar oynanabilirlik.",
      showcaseTwoTitle: "İlerleme sistemleri",
      showcaseTwoText: "Açılabilir içerikler, başarımlar, ödüller ve geri dönme sebepleri.",
      showcaseThreeTitle: "Karakter kimliği",
      showcaseThreeText: "Akılda kalan küp kahramanlar, temalar ve dünyalar.",
      featuredEyebrow: "Öne Çıkan Oyun",
      previewAlt: "Bounce Cube oynanış ekran görüntüsü",
      releasedStatus: "Yayında",
      featuredDescription: "Her zıplamanın önemli olduğu hızlı tempolu sonsuz bir arcade tırmanış oyunu. BC küplerini topla, akılda kalıcı küp karakterlerin kilidini aç, başarımları kovala ve liderlik tablolarında yüksel.",
      featureCharacters: "40+ açılabilir küp karakter",
      featureLeaderboards: "Google Play liderlik tabloları ve başarımlar",
      featureRewards: "2X BC ödülleri ve platform temaları",
      latestLabel: "Son Güncelleme",
      latestTitle: "Sürüm 1.1; Google Play Games, başarımlar ve global liderlik tabloları getiriyor.",
      openPlayButton: "Google Play'de Aç",
      viewGalleryButton: "Galeriyi Gör",
      universeEyebrow: "Küp Evreni",
      universeTitle: "Tek stüdyo, hareket halinde birden fazla dünya.",
      universeIntro: "Bounce Cube sadece başlangıç. NexHeart Studio yeni oyunlara, yeni sistemlere ve daha geniş bir indie kataloğa doğru büyüyor.",
      developmentStatus: "Geliştirme Aşamasında",
      comingStatus: "Yakında",
      bounceUniverseText: "Yetenek odaklı mobil arcade tırmanış oyunu ve NexHeart'ın ilk yayınlanan oyunu.",
      cafeUniverseText: "Yönetim, ilerleme ve sıcak teknoloji kültürünü keşfeden gelecek indie proje.",
      futureProjectsTitle: "Gelecek Projeler",
      futureUniverseText: "Daha fazla küp evreni oyunu ve deneysel indie fikirleri planlanıyor.",
      screenshotsEyebrow: "Ekran Görüntüleri",
      screenshotsTitle: "Cilalı bir mobil arcade dünyası.",
      screenshotsIntro: "Galeriyi açmak için herhangi bir ekran görüntüsüne dokun.",
      screenshotOneAlt: "Bounce Cube karakter koleksiyonu ekranı",
      screenshotTwoAlt: "Bounce Cube oynanış ekranı",
      screenshotThreeAlt: "Bounce Cube açılabilir kahramanlar ekranı",
      screenshotFourAlt: "Bounce Cube oyuncu istatistikleri ekranı",
      roadmapEyebrow: "Yol Haritası",
      roadmapTitle: "Sıradaki aşama tek oyundan daha büyük.",
      roadmapIntro: "NexHeart Studio, küp evrenini geliştirmeye devam ederken daha geniş bir kataloğa doğru büyüyor.",
      roadmapOneTitle: "Yeni güncellemeler",
      roadmapOneText: "Yayınlanan oyunlar için daha fazla cilalama, dengeleme ve kalite iyileştirmesi.",
      roadmapTwoTitle: "Daha fazla küp karakter",
      roadmapTwoText: "Yeni karakter fikirleri, temalar ve güçlü görsel kimlikler.",
      roadmapThreeTitle: "Yeni oyunlar",
      roadmapThreeText: "Internet Cafe Owner ve ek indie projeler uzun vadeli planın parçası.",
      roadmapFourTitle: "Yeni platformlar",
      roadmapFourText: "Gelecek yayınlar ilk mobil çıkış stratejisinin ötesine genişleyebilir.",
      aboutEyebrow: "Hakkında",
      aboutTitle: "Uzun hafızalı indie geliştirme.",
      aboutText: "NexHeart Studio; kompakt, ifadeli ve tekrar dönmeye değer oyunlar yapmak için var. Temiz hissi, görsel kimliği, oyuncu ilerlemesini ve büyümeye devam edebilen dünyaları önemsiyoruz.",
      contactEyebrow: "İletişim",
      contactTitle: "İş, destek ve gizlilik.",
      contactText: "Stüdyo görüşmeleri, Bounce Cube desteği veya gizlilik soruları için NexHeart Studio ile doğrudan iletişime geçin.",
      emailLabel: "E-posta",
      businessLabel: "İş",
      businessText: "Yayıncılık, iş birlikleri, basın ve platform görüşmeleri.",
      supportLabel: "Destek",
      supportText: "Oyun desteği, gizlilik talepleri ve oyuncu geri bildirimleri.",
      lightboxTitle: "Ekran görüntüsü önizlemesi",
      closeLightboxLabel: "Ekran görüntüsü önizlemesini kapat",
      previousScreenshotLabel: "Önceki ekran görüntüsü",
      nextScreenshotLabel: "Sonraki ekran görüntüsü",
      footerStudio: "Stüdyo",
      footerUniverse: "Evren",
      footerRoadmap: "Yol Haritası",
      footerPrivacy: "Gizlilik Politikası",
      footerContact: "İletişim",
      footerText: "© 2026 NexHeart Studio. Tüm hakları saklıdır.",
      privacyPageTitle: "Gizlilik Politikası | NexHeart Studio",
      privacyTitle: "Gizlilik Politikası",
      privacyIntro: "Bu sayfa, NexHeart Studio'nun oyunları ve web sitesi için gizlilik yaklaşımını açıklar.",
      privacyUpdated: "Son güncelleme: 17 Haziran 2026",
      privacyDataTitle: "İşlediğimiz bilgiler",
      privacyDataText: "NexHeart Studio bu web sitesini kişisel hesap verisi toplamak için kullanmaz. Google Play Games gibi oyun platformu özellikleri, kendi politikalarına göre oynanışla ilgili bilgileri işleyebilir.",
      privacySupportTitle: "Destek iletişimi",
      privacySupportText: "Bize e-posta gönderirseniz mesajınızı ve e-posta adresinizi yalnızca talebinize yanıt vermek için kullanırız.",
      privacyThirdPartyTitle: "Üçüncü taraf servisler",
      privacyThirdPartyText: "Bounce Cube; başarımlar, liderlik tabloları, dağıtım ve platform özellikleri için Google Play servislerini kullanabilir.",
      privacyContactTitle: "Sorular",
      privacyContactText: "Gizlilik soruları için NexHeart Studio'ya nexheart1811@gmail.com adresinden ulaşabilirsiniz.",
      privacyBack: "Stüdyoya Dön"
    }
  };

  function safeStorageGet(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function safeStorageSet(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      return;
    }
  }

  function getInitialLanguage() {
    var stored = safeStorageGet(STORAGE_KEY);

    if (stored && translations[stored]) {
      return stored;
    }

    if (window.navigator && /^tr\b/i.test(window.navigator.language || "")) {
      return "tr";
    }

    return DEFAULT_LANG;
  }

  function applyDictionary(dictionary) {
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      var key = element.getAttribute("data-i18n");

      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.textContent = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (element) {
      var key = element.getAttribute("data-i18n-html");

      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.innerHTML = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (element) {
      var key = element.getAttribute("data-i18n-alt");

      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.setAttribute("alt", dictionary[key]);
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (element) {
      var key = element.getAttribute("data-i18n-aria-label");

      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.setAttribute("aria-label", dictionary[key]);
      }
    });
  }

  function updateMetadata(dictionary) {
    var description = document.querySelector('meta[name="description"]');
    var ogTitle = document.querySelector('meta[property="og:title"]');
    var ogDescription = document.querySelector('meta[property="og:description"]');
    var twitterTitle = document.querySelector('meta[name="twitter:title"]');
    var twitterDescription = document.querySelector('meta[name="twitter:description"]');
    var isPrivacyPage = document.body && document.body.getAttribute("data-page") === "privacy";
    var titleKey = isPrivacyPage ? "privacyPageTitle" : "pageTitle";
    var descriptionText = isPrivacyPage ? dictionary.privacyPageDescription : dictionary.pageDescription;

    document.title = dictionary[titleKey] || dictionary.pageTitle;

    if (description) {
      description.setAttribute("content", descriptionText);
    }

    if (ogTitle) {
      ogTitle.setAttribute("content", document.title);
    }

    if (ogDescription) {
      ogDescription.setAttribute("content", descriptionText);
    }

    if (twitterTitle) {
      twitterTitle.setAttribute("content", document.title);
    }

    if (twitterDescription) {
      twitterDescription.setAttribute("content", descriptionText);
    }
  }

  function updateLanguageButtons(lang) {
    document.querySelectorAll("[data-lang]").forEach(function (button) {
      var active = button.getAttribute("data-lang") === lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function setLanguage(lang) {
    var selected = translations[lang] ? lang : DEFAULT_LANG;
    var dictionary = translations[selected];

    document.documentElement.lang = selected;
    applyDictionary(dictionary);
    updateMetadata(dictionary);
    updateLanguageButtons(selected);
    safeStorageSet(STORAGE_KEY, selected);

    window.dispatchEvent(new CustomEvent("nexheart:languagechange", {
      detail: { language: selected }
    }));
  }

  function bindLanguageButtons() {
    document.querySelectorAll("[data-lang]").forEach(function (button) {
      button.addEventListener("click", function () {
        setLanguage(button.getAttribute("data-lang"));
      });
    });
  }

  window.NexHeartI18n = {
    setLanguage: setLanguage,
    getLanguage: function () {
      return document.documentElement.lang || DEFAULT_LANG;
    },
    translations: translations
  };

  document.addEventListener("DOMContentLoaded", function () {
    bindLanguageButtons();
    setLanguage(getInitialLanguage());
  });
})();
