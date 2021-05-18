
// Creates pokemonRepository assigned to IIFE
var pokemonRepository = (function () {
  // Creates new pokemon Array
  var pokemonList = [
    {
      name: "Bulbasaur",
      height: 0.7,
      type: ["grass", "poison"]
    },
    {
      name: "Charizard",
      height: 1.7,
      type: ["fire", "flying"]
    },
    {
      name: "Pikachu",
      height: 0.4,
      type: ["electric"]
    }
  ];


  // Creates getAll funtction to call the pokemonList
  function getAll() {
    return pokemonList;
  }

  //Creates add function to add additional pokemon to the pokemonList
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  // Returns values of the getAll and add functions
  return {
    getAll: getAll,
    add: add

  };

})();

pokemonRepository.getAll().forEach(function(pokemon) {
  if (pokemon.height > 1) {
    document.write(pokemon.name + " (height:) " + pokemon.height + "<strong>. Wow, that's big! </strong><br><br>");
  } else {
    document.write(pokemon.name + " (height:) " +  pokemon.height + "<i>, is small. </i><br><br>")
  }
  console.log(pokemonRepository.getAll()); // []
  pokemonRepository.add({ name: "Sandslash" });
  pokemonRepository.add({ height: 1 });
  pokemonRepository.add({ type: ["Ground"] });
})

// OLD CODE FOR REFERENCE
/* Object key approach

Object.keys(pokemonRepository).forEach(function(pokemonList) {
  document.write(pokemonRepository[pokemonList]);
  console.log(pokemonRepository.getAll());
});

*/

/* Initial forEach coding approach
pokemonRepository.forEach(function(getAll) {
  document.write(pokemonList.name + ' is ' + pokemonList.height + ' m tall ' + ' and uses ' + pokemonList.type);
});
*/


/* Pokemon Array ORIGINAL CODE for reference
let pokemonList = [
    {name: "Bulbasaur", height: 0.7, type: ["grass", "poison"]},
    {name: "Charizard", height: 1.7, type: ["fire", "flying"]},
    {name: "Pikachu", height: 0.4, type: ["electric"]},
];
*/

/* Initializes for loop to start at index of array, goes through the entire array to find the heights of each Pokemon - ORIGINAL CODE for reference
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 1) {
    document.write(pokemonList[i].name + " (height:) " + pokemonList[i].height + "<strong>. Wow, that's big! </strong><br><br>");
  } else {
    document.write(pokemonList[i].name + " (height:) " +  pokemonList[i].height + "<i>, is small. </i><br><br>")
  }
}
*/
