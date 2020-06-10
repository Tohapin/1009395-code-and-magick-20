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

var arrCharacters = createCharactersItem(4)

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
