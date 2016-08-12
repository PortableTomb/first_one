var superheroes = [
    {
    name: "Spider-Man",
        alterEgo: {
            first: "Peter",
            last: "Parker"
        },
        age: 15,
        address: {
            country: "USA",
            city: "New York"
        },
        favoriteColors: ["blue", "red"]
    },
    {
    name: "Batman",
        alterEgo: {
            first: "Bruce",
            last: "Wayne"
        },
        age: 32,
        address: {
            country: "USA",
            city: "Gotham"
        },
        favoriteColors: ["black", "yellow"]
    }
];
console.log(superheroes[1].alterEgo.first); // "Bruce"
console.log(superheroes[0].favoriteColors[1]);// "red"
console.log(superheroes[1].age);
