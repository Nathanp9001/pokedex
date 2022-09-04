
//access api for pokemon data
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
let modalContainer = document.querySelector("#modal-container");

//add pokemon to list
function add(pokemon) {
  if (typeof pokemon === "object" && "name" in pokemon) {
    pokemonList.push(pokemon);
  } else {
    console.log("pokmeon is not correct");
  }
}

function getAll() {
  return pokemonList;
}

function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    showModal(pokemon);
  });
}

//opens modal with info about pokemon when button is clicked
function showModal(pokemon) {
let modalBody = $('.modal-body');
let modalTitle = $('.modal-title');
// let modalHeader = $('.modal-header');

modalTitle.empty();
modalBody.empty();

let nameElement = $('<h2>' + pokemon.name + '</h2>');
let imageElement = $('<img class="modal-img" style="width:350px">');
imageElement.attr('src', pokemon.imageUrl)
let heightElement = $('<p>' + 'height : ' + pokemon.height + '</p>');
let typesElement = $('<p>' + 'types : ' + pokemon.types + '</p>');


modalTitle.append(nameElement);
modalBody.append(imageElement);
modalBody.append(heightElement);
modalBody.append(typesElement);


};

// function hideModal() {
//   modalContainer.classList.remove('is-visible');
// }

// window.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
//     hideModal();
//   }
// });


//show list of pokemon
function addListItem(pokemon){
  let pokemonList = document.querySelector('.pokemon-list');
  let listPokemon = document.createElement('li');
  pokemonList.classList.add('group-list-item');
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('btn');

  button.setAttribute('data-toggle', 'modal');
  button.setAttribute('data-target', '#modal');

  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);
  button.addEventListener('click', function (event) {
    showDetails(pokemon);
  });
}

function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url,
      };
      add(pokemon);
      console.log(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
}


function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types.map(obj => obj.type.name).join(', ');
  }).catch(function (e) {
    console.error(e);
  });
}

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails
  };

  


})();

console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function(pokemon) {
pokemonRepository.addListItem(pokemon);
  });

});


//display types correctly
//make display correctly for mobile
//fade effect
//modal close button