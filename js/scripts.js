
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
