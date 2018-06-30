var link = document.querySelector('.feedback-link');
var popup = document.querySelector('.popup-feedback');
var close = document.querySelector('.popup-close');
var overlay = document.querySelector('.popup-overlay');
var nameField = popup.querySelector('[name="feedback-name"]');
var emailField = popup.querySelector('[name="feedback-email"]');
var textField = popup.querySelector('[name="feedback-text"]');
var form = popup.querySelector('.feedback-form');


var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('feedback-name');
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('popup-show');
  overlay.classList.add('show-overlay');
  if (storage) {
    nameField.value = storage;
    emailField.focus();
  } else {
    nameField.focus();
  }
});

close.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove('popup-show');
  popup.classList.remove('popup-error');
  overlay.classList.remove('show-overlay');
});

overlay.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove('popup-show');
  popup.classList.remove('popup-error');
  overlay.classList.remove('show-overlay');
})

form.addEventListener('submit', function(evt) {
  if (!nameField.value || !emailField.value || !textField.value) {
    evt.preventDefault();
    popup.classList.remove('popup-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('popup-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('feedback-name', nameField.value);
    }
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('popup-show')) {
      popup.classList.remove('popup-show');
      popup.classList.remove('popup-error');
      overlay.classList.remove('show-overlay');
    }
  }
})
