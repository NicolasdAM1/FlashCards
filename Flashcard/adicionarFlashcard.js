import { menu, decks } from "../main.js"
import { prompt, returnMenu} from "../datapack.js"

export function createFlashcard(){
    console.clear();
    console.log("=".repeat(40) + " CRIAÇÃO DE FLASHCARDS " + "=".repeat(40));
    if(decks.length <= 0){
        console.log("Não há baralhos para adicionar as flashcards. Crie um baralho primeiro.");
        returnMenu();
    }
    console.log("Digite a pergunta da flashcard: ");
    var fcQuestion = prompt("> ");
    console.log("Digite a resposta da flashcard: ");
    var fcAnswer = prompt("> ");


}