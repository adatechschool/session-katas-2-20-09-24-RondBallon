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

let deck = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
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

let fullDeck = createDeck(deck, types);
console.log(fullDeck);