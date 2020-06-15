'use strict';

document.querySelector('.setup').classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// функция для получения рандомного числа
var randomInteger = function (max) {
  var integer = Math.round(Math.random() * 10);

  while (integer > max) {
    integer = Math.round(Math.random() * 10);
  }

  return integer;
};

var randomName = function () {
  var arrFirstName = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var arrLastName = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  return arrFirstName[randomInteger(7)] + ' ' + arrLastName[randomInteger(7)];
};

var randomCoatColor = function () {
  var arrColor = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  return arrColor[randomInteger(5)];
};

var randomEyesColor = function () {
  var arrColor = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  return arrColor[randomInteger(4)];
};

var createCharactersItem = function (arrayLength) {
  var arrayCharacters = [];

  for (var i = 0; i < arrayLength; i++) {
    arrayCharacters[i] = {name: randomName(), coatColor: randomCoatColor(), eyesColor: randomEyesColor()};
  }

  return arrayCharacters;
};

var arrCharacters = createCharactersItem(4);

var addWizard = function (mas) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < 4; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = mas[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = mas[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = mas[i].eyesColor;

    fragment.appendChild(wizardElement);
  }

  return fragment;
};

similarListElement.appendChild(addWizard(arrCharacters));

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

var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

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

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
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
  var randomValue = randomInteger(5);

  while (wizardCoats.style.fill === arrayColorCoat[randomValue]) {
    randomValue = randomInteger(5);
  }

  wizardCoats.style.fill = arrayColorCoat[randomValue];
  document.querySelector('[name="coat-color"]').value = arrayColorCoat[randomValue];
});

wizardEyes.addEventListener('click', function () {
  var randomValue = randomInteger(4);

  while (wizardEyes.style.fill === arrayColorEyes[randomValue]) {
    randomValue = randomInteger(4);
  }

  wizardEyes.style.fill = arrayColorEyes[randomValue];
  document.querySelector('[name="eyes-color"]').value = arrayColorEyes[randomValue];
});

fireball.addEventListener('click', function () {
  var randomValue = randomInteger(4);

  while (fireball.style.background === arrayColorFireball[randomValue]) {
    randomValue = randomInteger(4);
  }

  fireball.style.background = arrayColorFireball[randomValue];
  document.querySelector('[name="fireball-color"]').value = arrayColorFireball[randomValue];
});
