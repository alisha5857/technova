const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');
const dialog = document.querySelector('[data-dialog]');
const dialogPanel = document.querySelector('.subscribe-dialog');
const dialogClose = document.querySelector('.dialog-close');
const emailInput = document.querySelector('#email');
const form = document.querySelector('#subscribe-form');
let lastFocusedElement;

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
  if (!isOpen) navigation.querySelector('a').focus();
});

navigation.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    menuToggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  }
});

function openDialog() {
  lastFocusedElement = document.activeElement;
  dialog.hidden = false;
  document.body.style.overflow = 'hidden';
  dialogPanel.focus();
}

function closeDialog() {
  dialog.hidden = true;
  document.body.style.overflow = '';
  lastFocusedElement?.focus();
}

document.querySelectorAll('[data-open-dialog]').forEach((button) => button.addEventListener('click', openDialog));
dialogClose.addEventListener('click', closeDialog);
dialog.addEventListener('click', (event) => { if (event.target === dialog) closeDialog(); });
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !dialog.hidden) closeDialog();
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    menuToggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
    menuToggle.focus();
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.querySelector('.form-status').textContent = `Thanks. ${emailInput.value} is on the list.`;
  form.reset();
});

const cards = [...document.querySelectorAll('.story-card')];
const filters = [...document.querySelectorAll('.topic-filter')];
const search = document.querySelector('#story-search');
const resultStatus = document.querySelector('.results-status');

function updateStories() {
  const activeTopic = document.querySelector('.topic-filter.is-active').dataset.topic;
  const searchTerm = search.value.trim().toLowerCase();
  let visibleCount = 0;
  cards.forEach((card) => {
    const matchesTopic = activeTopic === 'all' || card.dataset.topic === activeTopic;
    const matchesSearch = !searchTerm || card.dataset.title.toLowerCase().includes(searchTerm);
    const visible = matchesTopic && matchesSearch;
    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });
  resultStatus.textContent = `${visibleCount} ${visibleCount === 1 ? 'story' : 'stories'} shown`;
}

filters.forEach((filter) => filter.addEventListener('click', () => {
  filters.forEach((item) => {
    const active = item === filter;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  updateStories();
}));
search.addEventListener('input', updateStories);
updateStories();