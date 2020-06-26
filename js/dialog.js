'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var setupUserName = setup.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape' && document.activeElement !== setupUserName) {
      evt.preventDefault();
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');

    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      closePopup();
    }
  });

  var userNameInput = document.querySelector('.setup-user-name');

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  userNameInput.addEventListener('input', function () {
    var valueLength = userNameInput.value.length;

    if (valueLength < window.setup.MIN_NAME_LENGTH) {
      userNameInput.setCustomValidity('Ещё ' + (window.setup.MIN_NAME_LENGTH - valueLength) + ' симв.');
    } else if (valueLength > window.setup.MAX_NAME_LENGTH) {
      userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - window.setup.MAX_NAME_LENGTH) + ' симв.');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  var wizardCoats = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  var arrayColorCoat = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var arrayColorEyes = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var arrayColorFireball = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  wizardCoats.addEventListener('click', function () {
    var randomValue = window.setup.randomInteger(5);

    while (wizardCoats.style.fill === arrayColorCoat[randomValue]) {
      randomValue = window.setup.randomInteger(5);
    }

    wizardCoats.style.fill = arrayColorCoat[randomValue];
    document.querySelector('[name="coat-color"]').value = arrayColorCoat[randomValue];
  });

  wizardEyes.addEventListener('click', function () {
    var randomValue = window.setup.randomInteger(4);

    while (wizardEyes.style.fill === arrayColorEyes[randomValue]) {
      randomValue = window.setup.randomInteger(4);
    }

    wizardEyes.style.fill = arrayColorEyes[randomValue];
    document.querySelector('[name="eyes-color"]').value = arrayColorEyes[randomValue];
  });

  fireball.addEventListener('click', function () {
    var randomValue = window.setup.randomInteger(4);

    while (fireball.style.background === arrayColorFireball[randomValue]) {
      randomValue = window.setup.randomInteger(4);
    }

    fireball.style.background = arrayColorFireball[randomValue];
    document.querySelector('[name="fireball-color"]').value = arrayColorFireball[randomValue];
  });

  window.dialog = {
    setupClose: setupClose
  };
})();
