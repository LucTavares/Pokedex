function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${type}</li>`)
}


function convertPokemonToHtml(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}" id="${pokemon.number}" >
                    <span class="number">${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>


                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>

                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>
    
             `

}

const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMore')
const limit = 12;
let offset = 0;


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToHtml).join('')
        pokemonList.innerHTML += newHtml
    })
}
loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () =>{
    offset += limit
    
    loadPokemonItens(offset, limit)

})
        
const pokemonListClick = document.getElementById('pokemonListClick');

pokemonList.addEventListener('click', (event, ) => {
    const clickedItem = event.target.closest('li.pokemon');

    if (clickedItem) {
        const pokemonID = clickedItem.getAttribute('id');
        console.log(pokemonID)
        window.location.href = `pokeDetails.html?info=${pokemonID}`
    }
});

    