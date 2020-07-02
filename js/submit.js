'use strict';

(function () {
  var form = document.querySelector('.setup-wizard-form');

  var submitData = function (evt) {
    var onLoad = function () {
      window.dialog.closePopup();
    };

    var onError = function (message) {
      var div = document.createElement('div');

      div.classList.add('error-window');

      div.innerHTML = message;
      window.dialog.setup.appendChild(div);
    };
    window.backend.save(form, onLoad, onError);
    evt.preventDefault();
  };

  form.addEventListener('submit', submitData);
})();
