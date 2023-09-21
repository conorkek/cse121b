/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Conor Kekauoha';
let currentYear = new Date().getFullYear();
const profilePicture = 'images/121DF31A-1961-46C8-8040-38818B826EEC.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", "images/121DF31A-1961-46C8-8040-38818B826EEC.png");
imageElement.setAttribute('alt', `Profile picture of ${fullName}`);

/* Step 5 - Array */
const favFoods = ['Ramen ', 'Pho ', 'Sesame Chicken ', 'Chow Mein ', 'Blondies ', 'Vanilla Ice Cream '];
foodElement.innerHTML += `<br>${favFoods}`;
let newFavFood = 'Stir Fry ';
favFoods.push(newFavFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;