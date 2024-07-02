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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//OPTION 2
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userInput = document.getElementById("pokemonName");
            const pokemonName = userInput.value.toLowerCase();
            const response = yield fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            if (!response.ok) {
                throw new Error("Could not fetch resource");
            }
            const data = yield response.json();
            const pokemonSprite = data.sprites.front_default;
            const imgElement = document.getElementById("pokemonSprite");
            imgElement.src = pokemonSprite;
            imgElement.style.display = "block";
        }
        catch (error) {
            console.error(error);
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const userInput = document.getElementById("pokemonName");
    userInput.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            fetchData();
        }
    });
});
//# sourceMappingURL=index.js.map