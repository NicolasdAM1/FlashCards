import { menu, deck } from "../main.js"
import { prompt, returnMenu} from "../datapack.js"

export function createDeck(){
    console.clear();
    console.log("-".repeat(20) + "CRIE UM NOVO BARALHO" + "-".repeat(20));
    console.log("Digite o nome do novo baralho");
    var deckname = prompt("> ");
    
}