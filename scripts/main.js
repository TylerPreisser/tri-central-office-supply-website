(function () {
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  if (reducedMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -40px 0px" });

    reveals.forEach(function (el, index) {
      if (!el.style.getPropertyValue("--delay")) {
        el.style.setProperty("--delay", Math.min(index % 4, 3) * 60 + "ms");
      }
      observer.observe(el);
    });
  }

  document.querySelectorAll("form").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var target = form.classList.contains("site-search") ? "#categories" : "#contact";
      document.querySelector(target).scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    });
  });
})();
