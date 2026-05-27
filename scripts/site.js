(function () {
  document.documentElement.classList.add('js');

  const revealItems = Array.from(document.querySelectorAll('.reveal'));

  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  revealItems.forEach((item, index) => {
    if (!item.style.getPropertyValue('--delay')) {
      item.style.setProperty('--delay', `${Math.min(index % 3, 2) * 60}ms`);
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.14,
    rootMargin: '0px 0px -40px'
  });

  revealItems.forEach((item) => observer.observe(item));

  window.setTimeout(() => {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }, 1600);

  const mobileSearchLink = document.querySelector('.mobile-action-bar a[href="#site-search"]');
  const searchInput = document.querySelector('#site-search');
  if (mobileSearchLink && searchInput) {
    mobileSearchLink.addEventListener('click', () => {
      window.setTimeout(() => searchInput.focus(), 80);
    });
  }
}());
