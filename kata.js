// let deck = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
// let types = ["♠︎","♣︎","♡","♢"];

/*function createDeck (arr1, arr2) {
    let newArr = [];
    for (a in deck) {
        for (b in types){
            while (a < deck.length && b < types.length) {
                newArr = (deck[a] + types[b]);

            }
            return newArr;
        }
    }
    
} Nop...*/

let carte = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let types = ["♠︎", "♣︎", "♡", "♢"];

function createDeck(arr1, arr2) {
    let newArr = [];
    for (let a = 0; a < arr1.length; a++) {
        for (let b = 0; b < arr2.length; b++) {
            newArr.push(arr1[a] + arr2[b]);
        }
    }
    return newArr;
}

let deck = createDeck(carte, types);
console.log(deck);

function shuffleDeck (array) {
    let actuelIndex = deck.length;
    while (actuelIndex !== 0) { // Tant qu'on peut mélanger 
        let randomIndex = Math.floor(Math.random() * actuelIndex);
        actuelIndex --;
        [array[actuelIndex], array[randomIndex]] = [array[randomIndex], array[actuelIndex]]; // Swap de l'élement mélangé et celui en "place"
    }
}

shuffleDeck(deck);  
console.log(deck); //

function deal (cartes) {
    let distrib = deck.splice(2,2);
    return distrib;
}


player1 = deal(2);
player2 = deal(2);
console.log(player1);
console.log(player2);

function flop (deal) {
    let cards = [];
    cards.push(deal(1,1),deal(1,1), deal(1,0))
    
} // 16:42 j'arrête, je pense qu'il faut push dans [] 3 cartes avec deal() et appeler deal() 
    // pour bruler la carte avant chaque tour








    



