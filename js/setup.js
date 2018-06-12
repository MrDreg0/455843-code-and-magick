'use strict';

var WIZARDS_AMOUNT = 4;

var setupElement = document.querySelector('.setup');
var setupSimilarList = setupElement.querySelector('.setup-similar');
var similarList = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizards = [];
var wizardNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var wizardSurnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

var showElement = function (element) {
  element.classList.remove('hidden');
};

var generateRandomWizardName = function (name, surname) {
  var fullName = [
    name[getRandomNumber(0, name.length)],
    surname[getRandomNumber(0, surname.length)]
  ];
  return fullName.join(' ');
};

var getRandomArrElement = function (arr) {
  return arr[getRandomNumber(0, arr.length)];
};

var getObjWizard = function (arrNames, arrSurnames, arrCoatColors, arrEyesColors) {
  var wizard = {};
  wizard.name = generateRandomWizardName(arrNames, arrSurnames);
  wizard.coatColor = getRandomArrElement(arrCoatColors);
  wizard.eyesColor = getRandomArrElement(arrEyesColors);
  return wizard;
};

var getArrWizards = function (amount) {
  for (var i = 0; i < amount; i++) {
    wizards[i] = getObjWizard(wizardNames, wizardSurnames, coatColors, eyesColors);
  }
  return wizards;
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
getArrWizards(WIZARDS_AMOUNT);
renderSimilarList(wizards);
showElement(setupSimilarList);
