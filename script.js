(() => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Menüyü aç' : 'Menüyü kapat');
      navLinks.classList.toggle('is-open', !isOpen);
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Menüyü aç');
        navLinks.classList.remove('is-open');
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navLinks.classList.contains('is-open')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Menüyü aç');
        navLinks.classList.remove('is-open');
        menuToggle.focus();
      }
    });
  }

  const searchInput = document.getElementById('projectSearch');
  const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
  const projectCards = Array.from(document.querySelectorAll('.project-card'));
  const resultsCount = document.getElementById('resultsCount');
  const emptyState = document.getElementById('emptyState');
  let activeFilter = 'all';

  function updateProjects() {
    const query = (searchInput?.value || '').trim().toLocaleLowerCase('tr-TR');
    let visibleCount = 0;

    projectCards.forEach((card) => {
      const inCategory = activeFilter === 'all' || card.dataset.category === activeFilter;
      const searchableText = `${card.dataset.search || ''} ${card.textContent}`.toLocaleLowerCase('tr-TR');
      const matchesSearch = !query || searchableText.includes(query);
      const visible = inCategory && matchesSearch;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    if (resultsCount) {
      resultsCount.textContent = `${visibleCount} proje gösteriliyor`;
    }
    if (emptyState) emptyState.hidden = visibleCount !== 0;
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter || 'all';
      filterButtons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle('is-active', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      updateProjects();
    });
  });

  searchInput?.addEventListener('input', updateProjects);

  document.addEventListener('keydown', (event) => {
    const target = event.target;
    const isTyping = target instanceof HTMLElement && (
      target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)
    );
    if (event.key === '/' && !isTyping && searchInput) {
      event.preventDefault();
      searchInput.focus();
    }
  });

  const year = document.getElementById('currentYear');
  if (year) year.textContent = String(new Date().getFullYear());
})();
