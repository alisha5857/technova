const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const cartCount = document.querySelector('.cart-count');
const cartButton = document.querySelector('.cart-button');
const toast = document.querySelector('#toast');
const modal = document.querySelector('#quick-view-modal');
const modalImage = document.querySelector('#modal-image');
const modalTitle = document.querySelector('#modal-title');
const modalDescription = document.querySelector('#modal-description');
const modalPrice = document.querySelector('#modal-price');
const modalClose = document.querySelector('.modal-close');
const modalAdd = document.querySelector('.modal-add');
const modalBuy = document.querySelector('.modal-buy');
const contactForm = document.querySelector('#contact-form');

let cart = [];
let activeProduct = null;
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

function closeMobileMenu() {
  navMenu.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation menu');
}

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});

navLinks.forEach((link) => link.addEventListener('click', closeMobileMenu));

function getProductData(card) {
  return {
    name: card.dataset.product,
    description: card.dataset.description,
    price: card.dataset.price,
    image: card.dataset.image
  };
}

function addProductToCart(product) {
  cart.push(product);
  cartCount.textContent = cart.length;
  cartButton.setAttribute('aria-label', `Shopping cart, ${cart.length} ${cart.length === 1 ? 'item' : 'items'}`);
  showToast(`${product.name} added to your cart`);
}

document.querySelectorAll('.product-card').forEach((card) => {
  card.querySelector('.view-details').addEventListener('click', () => {
    activeProduct = getProductData(card);
    modalImage.src = activeProduct.image;
    modalImage.alt = activeProduct.name;
    modalTitle.textContent = activeProduct.name;
    modalDescription.textContent = activeProduct.description;
    modalPrice.textContent = activeProduct.price;
    modal.hidden = false;
    document.body.classList.add('modal-open');
    modalClose.focus();
  });

  card.querySelector('.add-to-cart').addEventListener('click', () => {
    addProductToCart(getProductData(card));
  });
});

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove('modal-open');
  activeProduct = null;
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.hidden) closeModal();
});
modalAdd.addEventListener('click', () => {
  if (activeProduct) {
    addProductToCart(activeProduct);
    closeModal();
  }
});

modalBuy.addEventListener('click', () => {
  if (activeProduct) {
    const productName = activeProduct.name;
    addProductToCart(activeProduct);
    closeModal();
    cartButton.focus();
    showToast(`${productName} is ready for checkout`);
  }
});

cartButton.addEventListener('click', () => {
  if (cart.length === 0) {
    showToast('Your cart is empty');
  } else {
    showToast(`${cart.length} ${cart.length === 1 ? 'item' : 'items'} in your cart`);
  }
});

function setFieldError(fieldId, message) {
  const field = document.querySelector(`#${fieldId}`);
  const error = document.querySelector(`#${fieldId}-error`);
  field.parentElement.classList.toggle('has-error', Boolean(message));
  error.textContent = message;
  return Boolean(message);
}

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const hasNameError = setFieldError('name', name ? '' : 'Please enter your name.');
  const hasEmailError = setFieldError('email', emailIsValid ? '' : 'Please enter a valid email.');
  const hasMessageError = setFieldError('message', message.length >= 10 ? '' : 'Please write at least 10 characters.');
  const successMessage = document.querySelector('#form-success');

  if (hasNameError || hasEmailError || hasMessageError) {
    successMessage.textContent = '';
    return;
  }

  successMessage.textContent = 'Thanks for reaching out. We will be in touch soon.';
  contactForm.reset();
  showToast('Message sent successfully');
});

document.querySelector('.newsletter-form').addEventListener('submit', (event) => {
  event.preventDefault();
  showToast('Thanks for joining the TechNova list');
  event.currentTarget.reset();
});
