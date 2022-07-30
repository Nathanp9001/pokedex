let pokemonList = [
  {name: 'Grimer', height: 0.9, types: 'poison'},
  {name: 'Houndoom', height: 1.4, types: ['dark', 'fire']},
  {name: 'Combee', height: 0.3, types: ['bug', 'flying']},
  {name: 'Groudon', height: 3.5, types: 'ground'}
];

// display pokemon names
for (let i=0; i < pokemonList.length; i++) {
  // if pokemon height is at least 2, adds text "Wow, that's big!"
 if (pokemonList[i].height >= 2) {
  document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') Wow, that\'s big!')
 } else {document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')')
 }
}