const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
  results.innerHTML = `Please give a valid height ${height}`;
} else if (weight === '' || weight < 0 || isNaN(weight)) {
  results.innerHTML = `Please give a valid weight ${weight}`;
} else {
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  let category = '';

  if (bmi < 18.6) {
    category = 'Underweight';
  } else if (bmi >= 18.6 && bmi < 24.9) {
    category = 'Normal (Healthy Weight)';
  } else if (bmi >= 25 && bmi < 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  results.innerHTML = `<span>Your BMI is ${bmi} (${category})</span>`;
}});