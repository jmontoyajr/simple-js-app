
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

  /* Creates function to add pokemon object */
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "type" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("Pokemon is not correct");
    }
  }

  /* Creates getAll function to return the pokemonList */
  function getAll() {
    return pokemonList;
  }

  /* Creates addListItem function to pull data from the html elements */
  function addListItem(pokemon) {
    let pokemonList = document.querySelector
    (".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    button.addEventListener('click', showDetails);
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
  }

  /* Shows pokemon object details in console */
  function showDetails(pokemon) {
    console.log(pokemon);
  }

  /* Returns add, getAll and addListItem objects */
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

/* Adds pokemon to repository */
pokemonRepository.add({ name: "Sandslash", height: 1, type: ["Ground"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
