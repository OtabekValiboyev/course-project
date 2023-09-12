const elOneInputName = document.querySelector('.one');
const elTwoInputName = document.querySelector('.two');
const elThreeInputName = document.querySelector('.three');
const elFourInputName = document.querySelector('.four');
const elFiveInputName = document.querySelector('.five');
const elSixInputName = document.querySelector('.six');
const elSevenInputName = document.querySelector('.seven');
const elEightInputName = document.querySelector('.eight');
const elNineInputName = document.querySelector('.nine');
const elTenInputName = document.querySelector('.ten');

const elShowButton = document.querySelector('.show');

const elShowResult = document.querySelector('.result');

const elPrice = document.querySelector('.js-price');

elShowButton.addEventListener('click', function () {
  var ismlar = [elOneInputName.value, elTwoInputName.value, elThreeInputName.value, elFourInputName.value, elFiveInputName.value, elSixInputName.value, elSevenInputName.value, elEightInputName.value, elNineInputName.value, elTenInputName.value];

  var randomIndex = Math.floor(Math.random() * ismlar.length);

  var randomIsmlar = ismlar[randomIndex];

  elShowResult.textContent = randomIsmlar;

  // console.log(randomIsmlar);
});

if (randomIsmlar === elOneInputName) {
  elPrice.classList.remove('prece');
  elPrice.classList.add('price--block');
};