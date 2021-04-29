// Pokemon Array
let pokemonList = [
    {name: "Bulbasaur", height: 0.7, type: ["grass", "poison"]},
    {name: "Charizard", height: 1.7, type: ["fire", "flying"]},
    {name: "Pikachu", height: 0.4, type: ["electric"]},
];

// Initializes for loop to start at index of array, goes through the entire array to find the heights of each Pokemon
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 1) {
    document.write(pokemonList[i].name + " (height:) " + pokemonList[i].height + ". Wow, that's big! ");
  } else {
    document.write(pokemonList[i].name + " (height:) " +  pokemonList[i].height + ", is small. ")
  }
}
