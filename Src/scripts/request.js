const baseURL = 'https://pokeapi.co/api/v2/';

export async function getPokemonList(){
const pokemon = await fetch(`${baseURL}pokemon/`,{
    method:"GET",
    headers:{"Content-Type": "application/json",
},}).then((res)=>{
    return res.json();
})
return pokemon;
}

export async function getPokemon(size){
    let pokemonList=[];   
    for(let i=1;i<=size; i++){
    const pokemon = await fetch(`${baseURL}pokemon/${i}`,{
        method:"GET",
        headers:{"Content-Type": "application/json",    
    },}).then((res)=>{
        return res.json();
    });
           
    pokemonList.push(pokemon);
}
return pokemonList;
}