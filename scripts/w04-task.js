/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Conor Kekauoha',
    photo: 'images/121DF31A-1961-46C8-8040-38818B826EEC.png',
    favoriteFoods: [
        'Ramen ',
         'Pho ', 
         'Sesame Chicken ', 
         'Chow Mein ', 
         'Blondies ', 
         'Vanilla Ice Cream '
    ],
    hobbies: [
        'piano ',
        'violin ',
        'guitar ',
        'singing ',
        'soccer ',
        'Xbox ',
        'surfing ',
        'audiobooks ',
        'cooking ',
        'camping ',
        'hiking '
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
        place: 'Manhattan Beach, CA',
        length: '24 years'
});

myProfile.placesLived.push({
        place: 'Westchester, CA',
        length: '3 years'
});

myProfile.placesLived.push({
        place: 'Rexburg, ID',
        length: '4 months'
});

/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').textContent = myProfile.name;
/* Photo with attributes */
document.getElementById('photo').setAttribute('src', myProfile.photo);
document.getElementById('photo').setAttribute('alt', myProfile.name);
/* Favorite Foods List*/
// myProfile.favoriteFoods.forEach(food => {
//     let li = document.createElement('li'),
//     li.textContent = food;
//     document.querySelector('#favorite-foods').appendChild('li');
// });
let favoriteFood1 = document.createElement('li');
favoriteFood1.textContent = myProfile.favoriteFoods[0];
document.getElementById('favorite-foods').appendChild(favoriteFood1);

let favoriteFood2 = document.createElement('li');
favoriteFood2.textContent = myProfile.favoriteFoods[1];
document.getElementById('favorite-foods').appendChild(favoriteFood2);

let favoriteFood3 = document.createElement('li');
favoriteFood3.textContent = myProfile.favoriteFoods[2];
document.getElementById('favorite-foods').appendChild(favoriteFood3);

let favoriteFood4 = document.createElement('li');
favoriteFood4.textContent = myProfile.favoriteFoods[3];
document.getElementById('favorite-foods').appendChild(favoriteFood4);

let favoriteFood5 = document.createElement('li');
favoriteFood5.textContent = myProfile.favoriteFoods[4];
document.getElementById('favorite-foods').appendChild(favoriteFood5);

let favoriteFood6 = document.createElement('li');
favoriteFood6.textContent = myProfile.favoriteFoods[5];
document.getElementById('favorite-foods').appendChild(favoriteFood6);

/* Hobbies List */
// myProfile.hobbies.forEach(hobbies => {
//     let li = document.createElement('li'),
//     li.textcontent = hobbies;
//     document.querySelector('#hobbies').appendChild('li');
// });
let hobbies1 = document.createElement('li');
hobbies1.textContent = myProfile.hobbies[0];
document.getElementById('hobbies').appendChild(hobbies1)

let hobbies2 = document.createElement('li');
hobbies2.textContent = myProfile.hobbies[1];
document.getElementById('hobbies').appendChild(hobbies2)

let hobbies3 = document.createElement('li');
hobbies3.textContent = myProfile.hobbies[2];
document.getElementById('hobbies').appendChild(hobbies3)

let hobbies4 = document.createElement('li');
hobbies4.textContent = myProfile.hobbies[3];
document.getElementById('hobbies').appendChild(hobbies4)

let hobbies5 = document.createElement('li');
hobbies5.textContent = myProfile.hobbies[4];
document.getElementById('hobbies').appendChild(hobbies5)

let hobbies6 = document.createElement('li');
hobbies6.textContent = myProfile.hobbies[5];
document.getElementById('hobbies').appendChild(hobbies6)

let hobbies7 = document.createElement('li');
hobbies7.textContent = myProfile.hobbies[6];
document.getElementById('hobbies').appendChild(hobbies7)

let hobbies8 = document.createElement('li');
hobbies8.textContent = myProfile.hobbies[7];
document.getElementById('hobbies').appendChild(hobbies8)

let hobbies9 = document.createElement('li');
hobbies9.textContent = myProfile.hobbies[8];
document.getElementById('hobbies').appendChild(hobbies9)

let hobbies10 = document.createElement('li');
hobbies10.textContent = myProfile.hobbies[9];
document.getElementById('hobbies').appendChild(hobbies10)

let hobbies11 = document.createElement('li');
hobbies11.textContent = myProfile.hobbies[10];
document.getElementById('hobbies').appendChild(hobbies11)

/* Places Lived DataList */
let placesLivedPlaces1 = document.createElement('dt');
placesLivedPlaces1.textContent = myProfile.placesLived[0].place;
document.getElementById('places-lived').appendChild(placesLivedPlaces1)

let placesLivedLength1 = document.createElement('dd');
placesLivedLength1.textContent = myProfile.placesLived[0].length;
document.getElementById('places-lived').appendChild(placesLivedLength1)

let placesLivedPlaces2 = document.createElement('dt');
placesLivedPlaces2.textContent = myProfile.placesLived[1].place;
document.getElementById('places-lived').appendChild(placesLivedPlaces2)

let placesLivedLength2 = document.createElement('dd');
placesLivedLength2.textContent = myProfile.placesLived[1].length;
document.getElementById('places-lived').appendChild(placesLivedLength2)

let placesLivedPlaces3 = document.createElement('dt');
placesLivedPlaces3.textContent = myProfile.placesLived[2].place;
document.getElementById('places-lived').appendChild(placesLivedPlaces3)

let placesLivedLength3 = document.createElement('dd');
placesLivedLength3.textContent = myProfile.placesLived[2].length;
document.getElementById('places-lived').appendChild(placesLivedLength3)