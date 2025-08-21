import { createDeck } from "./Deck/adicionarBaralho.js";
import { listDeck } from "./Deck/listarBaralho.js";
import { updateDeck } from "./Deck/editarBaralho.js";
import { removeDeck } from "./Deck/removerBaralho.js";
import { prompt, endProcess, returnMenu } from "./datapack.js";
import { createFlashcard } from "./Flashcard/adicionarFlashcard.js";



export let decks = [];
export let Flashcards = [];

export function menu(){
    console.clear();
    console.log('='.repeat(40) + " Gerenciamento de Flashcards " + '='.repeat(40));
    console.log(
            "Digite o número correspondente a opção desejada:\n"
            + "1 - Adicionar Baralho\n"
            + "2 - Listar Baralho\n"
            + "3 - Editar Baralho\n"
            + "4 - Remover Baralho\n"
            + "5 - Criar Flashcard\n"

            
    )
    let choice = prompt("> ");
    switch(parseInt(choice)){
        case 1:
            createDeck();
            break;
        case 2:
            listDeck();
            break;
        case 3:
            updateDeck();
            break;
        case 4:
            removeDeck();
            break;
        case 5:
            createFlashcard();
        case 0:
            endProcess();
            break;
        default:
            console.log("Opção inválida.");
            returnMenu();
            break;
    }
}
menu();