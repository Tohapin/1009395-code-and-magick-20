'use strict';
(function () {

  var setupDialogElement = document.querySelector('.setup');
  var dialogHandle = setupDialogElement.querySelector('.upload');
  var defaulCoordsX = setupDialogElement.offsetLeft;
  var defaulCoordsY = setupDialogElement.offsetTop;

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault);
        };

        dialogHandle.addEventListener('click', onClickPreventDefault);

        var onDefaultCoords = function () {
          setupDialogElement.style.top = (defaulCoordsY) + 'px';
          setupDialogElement.style.left = (defaulCoordsX) + 'px';
        };

        window.dialog.setupClose.addEventListener('click', onDefaultCoords);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
