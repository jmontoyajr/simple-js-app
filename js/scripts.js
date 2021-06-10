// Creates pokemonRepository assigned to IIFE
let pokemonRepository = (function() {
  // Creates new pokemon Array
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/";

  /* Creates function to add pokemon object */
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon &&
      "height" in pokemon
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
    let pokemonList = document.querySelector(".pokemon-list");

    /* Creates variable to display pokemon list items */
    let li = $("<li></li>");
    let inputValue = $("input").val();
    li.append(inputValue);

    /* Creates list elements on the page, ties html content to modal */
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    $(button).addClass("btn btn-outline-danger btn-width group-list-item");
    $(button).attr({ "data-toggle": "modal", "data-target": "#pokemon-modal" });

    /* Creates pokemon buttons */
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);

    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }

  /* Show modal called when clicked */
  function showModal(item) {
    loadDetails(item).then(function() {
      let modalTitle = $(".modal-title");
      let modalBody = $(".modal-body");
      let columnLeft = $(".col__left");
      let modalRow = $(".modal-row");

      $(modalTitle).empty();
      $(columnLeft).empty();

      /* Create variables to display items in modal */
      let nameElement = $("<h1>" + item.name + "</h1>");
      let heightElement = $(
        "<div>" + "<p>" + " Height: " + item.height + "</p>" + "</div>"
      );
      let typeElement = $(
        "<div>" + "<p>" + " Type: " + item.types + "</p>" + "</div>"
      );
      let abilitiesElement = $(
        "<div>" + "<p>" + "Abilities: " + item.abilities + "</p>" + "</div>"
      );

      /* Create variable to display image in modal */
      let imageElement = $('<img class="modal-image">');
      imageElement.attr("src", item.imageUrl);
      imageElement.attr("id", "modal-image");

      /* Add elements to modal */
      modalTitle.append(nameElement);
      columnLeft.append(heightElement, imageElement);
      modalRow.append(columnLeft);
      modalBody.append(modalRow);
    });
  }

  /* Load list from pokemon API */
  function loadList() {
    return fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json.results.forEach(function(item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
            height: item.height
          };
          add(pokemon);
          console.log(pokemon);
        });
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  /* Load details from pokemon API */
  function loadDetails(item) {
    let url = item.detailsUrl;
    let name = item.name;
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  /* Shows pokemon object details in console */
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function() {
      showModal(pokemon);
      console.log(pokemon);
    });
  }

  /* Returns inputs from each function */
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
