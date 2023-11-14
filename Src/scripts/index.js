const baseURL = 'https://pokeapi.co/api/v2/';

async function getPokemonList(){
const result = await fetch(`${baseURL}pokemon/pikachu`,{
    method:"GET",
    headers:{"Content-Type": "application/json",
},}).then((res)=>{
    return res.json();
})
console.log(result.sprites.front_default);
}

function buttonProfile(){
    const button = document.querySelector("button");
    button.addEventListener("click", ()=>{
        console.log("post");
        location.replace("./Src/pages/profile.html");
    })
}




buttonProfile();

