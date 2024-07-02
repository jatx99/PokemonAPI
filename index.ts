// OPTION 1
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok) {
//             throw new Error("Could not fetch resource");
//         } 
//         
//          return response.json();
//       
//     })
//     .then(data => console.log(data.id))
//     .catch(error => console.error(error));
    
//OPTION 2



async function fetchData() {
    try {

        const userInput = document.getElementById("pokemonName") as HTMLInputElement;
        const pokemonName = userInput.value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok) {

            throw new Error("Could not fetch resource");

        }   

        const data = await response.json();
       
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite") as HTMLImageElement;
        
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";


    } catch(error) {
        console.error(error);
        
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const userInput = document.getElementById("pokemonName") as HTMLInputElement;

    userInput.addEventListener("keydown", event => {

        if(event.key === "Enter") {
            fetchData();
        }
    });
});