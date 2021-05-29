
// Creates pokemonRepository assigned to IIFE
let pokemonRepository = (function () {
  // Creates new pokemon Array
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  let modalContainer = document.querySelector('#modal-container');

  /* Creates Show Modal function */
  function showModal(pokemon) {
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');

    /* Creates close modal functionality */
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;

    let contentElement = document.createElement('p');
    contentElement.innerText = pokemon.height;

    let container = document.querySelector('#image-container');
    let myImage = document.createElement('img');
    myImage.src = pokemon.imageUrl;

    /* Calls modal elements */
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(myImage);
    modalContainer.appendChild(modal);


    modalContainer.classList.add('is-visible');
  }

  /* Creates hide modal function */
  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  /* Adds event listener to look for keydown or use of Esc key) */
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' &&
    modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  /* Hides modal if user clicks directly on the overlay */
  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

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
    let pokemonList = document.querySelector
    (".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
  }

  /* Load list from pokemon API */
  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
          height: item.height
        };
        add (pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  /* Load details from pokemon API */
  function loadDetails(item) {
    let url = item.detailsUrl;
    let name = item.name;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function(e) {
      console.error(e);
    });
  }

  /* Shows pokemon object details in console */
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
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
