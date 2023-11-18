const baseURL = 'https://pokeapi.co/api/v2/pokemon/';

async function getPokemon() {   
    const pokemon = await fetch(`${baseURL}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => {
        // console.log(res);
        return  res.json();
    });
   
    return pokemon;
}


async function renderPokemon(){
    const pokemon = await getPokemon();
   console.log(pokemon.sprites);
    const div = document.querySelector(".div_test");
    const avatar = document.createElement("img");
    avatar.src = pokemon.sprites.front_default;
    div.appendChild(avatar);
    
}


   
renderPokemon();