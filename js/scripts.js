
// display pokemon names
let pokemonRepository = (function () {
  let pokemonList = [ 
  {name: 'Grimer', height: 0.9, types: 'poison'},
  {name: 'Houndoom', height: 1.4, types: ['dark', 'fire']},
  {name: 'Combee', height: 0.3, types: ['bug', 'flying']},
  {name: 'Groudon', height: 3.5, types: 'ground'}
];

function add(pokemon) {
  pokemonList.push(pokemon);
}

function getAll() {
  return pokemonList;
}

function showDetails(pokemon) {
  console.log(pokemon);
}

function addListItem(pokemon){
  let pokemonList = document.querySelector('.pokemon-list');
  let listPokemon = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('button-class')
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);
  document.createElement('button');
  button.addEventListener('click', function (pokemon) {
    showDetails(pokemon);
  });
}

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem
};
  })();

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
pokemonRepository.addListItem(pokemon);
});


