'use strict';

var WIZARDS_AMOUNT = 4;

var setupElement = document.querySelector('.setup');
var setupSimilarList = setupElement.querySelector('.setup-similar');
var similarList = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

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
  ]
};

var wizards = [];

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

var showElement = function (element) {
  element.classList.remove('hidden');
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

showElement(setupElement);
generateArrWizards(WIZARDS_AMOUNT, optionsGenerateWizard);
renderSimilarList(wizards);
showElement(setupSimilarList);
