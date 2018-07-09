'use strict';

var WIZARDS_AMOUNT = 4;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open-icon');
var setupClose = document.querySelector('.setup-close');
var setupSimilarList = setup.querySelector('.setup-similar');
var similarList = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupPlayerCoat = document.querySelector('.setup-player .wizard-coat');
var setupPlayerEyes = document.querySelector('.setup-player .wizard-eyes');
var setupPlayerFireball = document.querySelector('.setup-player .setup-fireball-wrap');
var fieldValuePlayerCoat = document.querySelector('.setup-player [name="coat-color"]');
var fieldValuePlayerEyes = document.querySelector('.setup-player [name="eyes-color"]');
var fieldValuePlayerFireball = document.querySelector('.setup-player [name="fireball-color"]');


var Keycode = {
  'ESC': 27,
  'ENTER': 13
};

var optionsGenerateWizard = {
  names: [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ],
  surnames: [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ],
  coatColors: [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ],
  eyesColors: [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ],
  fireballColors: [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ]
};

var wizards = [];

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

var getRandomWizardName = function (names, surnames) {
  return getRandomElementArr(names) + ' ' + getRandomElementArr(surnames);
};

var getRandomElementArr = function (arr) {
  return arr[getRandomNumber(0, arr.length - 1)];
};

var generateArrWizards = function (amount, options) {
  for (var i = 0; i < amount; i++) {
    wizards[i] = {};
    wizards[i].name = getRandomWizardName(options.names, options.surnames);
    wizards[i].coatColor = getRandomElementArr(options.coatColors);
    wizards[i].eyesColor = getRandomElementArr(options.eyesColors);
  }
};

var makeWizardItem = function (currentWizard) {
  var similar = similarList.cloneNode(true);
  similar.querySelector('.setup-similar-label').textContent = currentWizard.name;
  similar.querySelector('.wizard-coat').style.fill = currentWizard.coatColor;
  similar.querySelector('.wizard-eyes').style.fill = currentWizard.eyesColor;
  return similar;
};

var renderSimilarList = function (arr) {
  var fragment = document.createDocumentFragment();
  var list = document.querySelector('.setup-similar-list');
  for (var j = 0; j < arr.length; j++) {
    fragment.appendChild(makeWizardItem(arr[j]));
  }
  list.appendChild(fragment);
};

var showElement = function (element) {
  element.classList.remove('hidden');
};

var hideElement = function (element) {
  element.classList.add('hidden');
};

var onSetupPressEsc = function (evt) {
  if (evt.keyCode === Keycode.ESC && evt.target.className !== 'setup-user-name') {
    closeSetup();
  }
};

var onCloseSetupPressEnter = function (evt) {
  if (evt.keyCode === Keycode.ENTER) {
    closeSetup();
  }
};

var openSetup = function () {
  showElement(setup);
  document.addEventListener('keydown', onSetupPressEsc);
  setupClose.addEventListener('keydown', onCloseSetupPressEnter);
};

var closeSetup = function () {
  hideElement(setup);
  document.removeEventListener('keydown', onSetupPressEsc);
  setupClose.removeEventListener('keydown', onCloseSetupPressEnter);
};

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === Keycode.ENTER) {
    openSetup();
  }
});

setupOpen.addEventListener('click', openSetup);
setupClose.addEventListener('click', closeSetup);

setupPlayerCoat.addEventListener('click', function () {
  var coatColor = getRandomElementArr(optionsGenerateWizard.coatColors);
  setupPlayerCoat.style = 'fill: ' + coatColor;
  fieldValuePlayerCoat.value = coatColor;
});

setupPlayerEyes.addEventListener('click', function () {
  var eyesColor = getRandomElementArr(optionsGenerateWizard.eyesColors);
  setupPlayerEyes.style = 'fill: ' + eyesColor;
  fieldValuePlayerEyes.value = eyesColor;
});

setupPlayerFireball.addEventListener('click', function () {
  var fireballColor = getRandomElementArr(optionsGenerateWizard.fireballColors);
  setupPlayerFireball.style.backgroundColor = fireballColor;
  fieldValuePlayerFireball.value = fireballColor;
});

generateArrWizards(WIZARDS_AMOUNT, optionsGenerateWizard);
renderSimilarList(wizards);
showElement(setupSimilarList);
