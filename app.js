const tempInput = document.querySelector('#temp-input');
const button = document.querySelector('.btn');
const disabledInputOne = document.querySelector('#dis1');

button.addEventListener('click', function(e) {
  c = (tempInput.value - 32) * 0.5556;
  disabledInputOne.value = `Degrees Celcius: ${c}`;
  tempInput.value = '';
  e.preventDefault();
});