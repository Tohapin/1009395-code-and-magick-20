'use strict';

(function () {
  var MIN_NAME_LENGTH = 2;
  var MAX_NAME_LENGTH = 25;

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

  var addWizard = function (mas) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      var wizardElement = similarWizardTemplate.cloneNode(true);
      var randomWizard = randomInteger(17);

      wizardElement.querySelector('.setup-similar-label').textContent = mas[randomWizard].name;
      wizardElement.querySelector('.wizard-coat').style.fill = mas[randomWizard].colorCoat;
      wizardElement.querySelector('.wizard-eyes').style.fill = mas[randomWizard].colorEyes;

      fragment.appendChild(wizardElement);
    }

    similarListElement.appendChild(fragment);
  };

  // similarListElement.appendChild(addWizard(arrCharacters));

  window.setup = {
    MIN_NAME_LENGTH: MIN_NAME_LENGTH,
    MAX_NAME_LENGTH: MAX_NAME_LENGTH,
    randomInteger: randomInteger,
    addWizard: addWizard
  };
})();
