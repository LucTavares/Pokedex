const urlParams = new URLSearchParams(window.location.search);
const pokemonID = urlParams.get('info');
const pokemonDetalhes = document.querySelector('#pokemonDetalhes')



const fetchPokemon =  async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
    const data = await APIResponse.json()
    return data
    
}



const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    const types = data.types.map((typeSlot) => typeSlot.type.name)
    const abilities = data.abilities.map((abilities) => abilities.ability.name)
    const valorDaApiPeso = data.weight
    const valorEmKg = valorDaApiPeso / 10 
    const valorDaApiAltura = data.height
    const valorEmM = valorDaApiAltura / 10
    

    pokemonDetalhes.innerHTML = `
    <h1>Pokedex</h1>
    <div class="infosPokemon">
    <img class="gifPokemon" src="${data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']}" alt="imagem pokemon">
    
    <h2>${data.name}</h2>
    <h3>Tipos:</h3>
    <p class"${types[0]}">${types.join(" ")}</p>
    <h3>Habilidades:</h3>
    <p>${abilities.join("  ")}</p>
    <p>Peso: ${valorEmKg} Kg || Altura: ${valorEmM}m</p>
    
    
   
    </div>
    `
}


renderPokemon()