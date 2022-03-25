const mainDeck = makeDeck();

function makeDeck() {
    const deck = [];
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const values = '2,3,4,5,6,7,8,9,J,Q,K,A';
    for (let value of values.split(',')) {
        for (let suit of suits) {
            deck.push({
                value,
                suit
            });
        }
    }
    return deck;
}

function drawCard(deck) {
    return deck.pop();
}

const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,J,Q,K,A',
    initializeDeck() {
        const {
            suits,
            values,
            deck
        } = this;
        for (let value of values.split(',')) {
            for (let suit of suits) {
                deck.push({
                    value,
                    suit
                });
            }
        }
    },
    drawCard() {
        const card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },
    drawMultiple(numCards) {
        const cards = [];
        for(let i = 0; i < numCards; i++) {
            cards.push(this.drawCard());
        }
        return cards;
    }
}

function shuffle(arr) {
    for(let i = arr.length-1; i>0;i--) {
        let j = Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
        console.log(arr);
    }
}

console.log(myDeck.initializeDeck());
console.log(myDeck.drawCard());
console.log(myDeck.drawCard());
console.log(myDeck.drawnCards);
console.log(myDeck.drawMultiple(5));
console.log(myDeck.drawnCards);

shuffle(['A','B','C','D','E','F']);