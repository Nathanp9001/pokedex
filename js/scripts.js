
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

return {
  add: add,
  getAll: getAll
};
  })();

console.log(pokemonRepository.getAll());

pokemonRepository.forEach(function(getAll) {
  document.write('<p>' + pokemonList.name + ' (height: ' + pokemonList.height + ')')
});


