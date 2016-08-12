var superHeroes = [];
//Spider-Man
superHeroes[0] = {};
superHeroes[0].name = "Spider-Man";
superHeroes[0].alterEgo = {
    firstName: 'Peter',
    lastName: 'Parker'
};
superHeroes[0].age = 15;
superHeroes[0].address = {
    country: 'USA',
    city: 'New York',
};
superHeroes[0].favoriteColors = ["black","red"];

//Batman
superHeroes[1] = {};
superHeroes[1].name = "Batman";
superHeroes[1].alterEgo = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
superHeroes[1].age = 25;
superHeroes[1].address = {
    country: 'USA',
    city: 'Gotham',
};
superHeroes[1].favoriteColors = ["black","grey"];
//Log
console.log(superHeroes);
