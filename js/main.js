// Sprache umschalten (EN Standard, DE wenn der Browser Deutsch ist; Auswahl wird gemerkt)
(function () {
  var root = document.documentElement;
  var switchBtn = document.querySelector('.lang-switch');

  function setLang(lang) {
    root.lang = lang;
    try { localStorage.setItem('lang', lang); } catch (e) {}
    if (switchBtn) {
      switchBtn.setAttribute('aria-label', lang === 'de' ? 'Switch to English' : 'Auf Deutsch umschalten');
    }
  }

  if (switchBtn) {
    setLang(root.lang === 'de' ? 'de' : 'en');
    switchBtn.addEventListener('click', function () {
      setLang(root.lang === 'de' ? 'en' : 'de');
    });
  }

  // Video in "Träumerei" startet beim Aufklappen und stoppt beim Zuklappen
  document.querySelectorAll('details.work').forEach(function (d) {
    d.addEventListener('toggle', function () {
      d.querySelectorAll('video').forEach(function (v) {
        if (d.open) {
          var p = v.play();
          if (p && p.catch) p.catch(function () {});
        } else {
          v.pause();
        }
      });
    });
  });

  // Direktlink auf eine Arbeit (z. B. #traeumerei) klappt sie auf
  function openFromHash() {
    var el = location.hash && document.getElementById(location.hash.slice(1));
    if (el && el.tagName === 'DETAILS') el.open = true;
  }
  window.addEventListener('hashchange', openFromHash);
  openFromHash();
})();
