class Card {

    // assigns descriptive text to the field name by passed card value
        value;
        name;
    
    //Card value and string are passed in when the deck class is instantiated.
        constructor (cardValue, suit) {
    
            this.value = cardValue;
    
            if (cardValue == 2)
            {
                this.name = "Two";
            }
            if (cardValue == 3)
            {
                this.name = "Three";
            }
            if (cardValue == 4)
            {
                this.name = "Four";
            }
            if (cardValue == 5)
            {
                this.name = "Five";
            }
            if (cardValue == 6)
            {
                this.name = "Six";
            }
            if (cardValue == 7)
            {
                this.name = "Seven";
            }
            if (cardValue == 8)
            {
                this.name = "Eight";
            }
            if (cardValue == 9)
            {
                this.name = "Nine";
            }
            if (cardValue == 10)
            {
                this.name = "Ten";
            }
            if (cardValue == 11)
            {
                this.name = "Jack";
            }
            if (cardValue == 12)
            {
                this.name = "Queen";
            }
            if (cardValue == 13)
            {
                this.name = "King";
            }
            if (cardValue == 14)
            {
                this.name = "Ace";
    
            } 
    
            this.name += " of " + suit;
    
        }
    
        getValue() {
            return this.value;
        }
    
        getName() {
            return this.name;
        }
    
    //This method being called by each instantiation of the class player.
        describe() { 
            console.log("Card: %s with value of %d\n", this.name, value);
        }
    }

    class Player { 
    
        constructor (newName) {
            this.name = newName;
            this.score = 0;
            this.hand = [];
        }
            
    
    //Uses pop to remove and return top card in hand.        
         flip() { 
            return this.hand.pop(); 
        }

    
    //Adds one to whichever player wins the hand.
         incrementScore() { 
            this.score++; 
        }
    
    //This is used to display the score between the two players.
         getScore() {
            return this.score;
        }
    
    //This is used on the Sysout to display the name of the player.
         getName() {
            return this.name;
        }
    }

    class Game {
        constructor() {
            this.cards = [];
            this.player1;
            this.player2;
        }
    
        start() {
         //let player1name = prompt('Enter Name of player 1');  
         //let player2name = prompt('Enter Name of player 2');
        this.player1 = new Player("Batman");
        this.player2 = new Player("Robin");
         
         let cards = BuildDeck();
         shuffle(cards);
         //split the deck and giving each player equal amounts of card. 
         var indexToSplit = 26;
         this.player1.hand = cards.slice(0, indexToSplit);
         this.player2.hand = cards.slice(indexToSplit);
         
        
        //Looping through half of the deck for each player.
//It's removing from the Player's deck and for comparison to determine who
//wins the hand.
//Player 1 and Player 2 are instantiated and the getValue method is invoked
//to get the card's value for comparison.
//This forloop is the game's comparison engine.
let iHandNo = 1;
for (let i = 0; i < 26; i++) {
    let player1Card = this.player1.flip();
    let player2Card = this.player2.flip();
    console.log("Game Hand No -  " + iHandNo++);
    if (player1Card.getValue() > player2Card.getValue()) {
        console.log("Player 1 " + this.player1.getName() + " card value is " + player1Card.getValue());
        console.log("Player 2 " + this.player2.getName() + " card value is  " + player2Card.getValue());
        console.log("Player 1 " + this.player1.getName() + " won this hand " + "with card "
                + player1Card.getName() + " to card " + player2Card.getName());
                this.player1.incrementScore();
        console.log("Player 1 running  score " + this.player1.getScore());
        console.log("Player 2 running  score " + this.player2.getScore());
    } else if (player1Card.getValue() < player2Card.getValue()) {
        console.log("Player 2 " + this.player2.getName() + " card value is " + player2Card.getValue());
        console.log("Player 1 " + this.player1.getName() + " card value is " + player1Card.getValue());
        console.log("Player 2 " + this.player2.getName() + " won this hand " + "with card "
                + player2Card.getName() + " to Player 1's card " + player1Card.getName());
        this.player2.incrementScore();
        console.log("Player 2 running  score " + this.player2.getScore());
        console.log("Player 1 running  score " + this.player1.getScore());
    } else if (player1Card.getValue() == player2Card.getValue()) {
        console.log("Player 2 " + player1Card.getValue());
        console.log("Player 1 " + player2Card.getValue());
        console.log(
                "It was a draw!  Hand of " + this.player1.getName() + " Player 1's card of " + player1Card.getName()
                        + " & " + this.player2.getName() + " Player 2's card of " + player2Card.getName());
        console.log("Player 2 running  score " + this.player2.getScore());
        console.log("Player 1 running  score " + this.player1.getScore());
    }
}

//This displays the score and who is the winner and/or a draw.

console.log("Player 1 score = %d\n", this.player1.getScore());
console.log("Player 2 score = %d\n", this.player2.getScore());
if (this.player1.getScore() > this.player2.getScore()) {
    console.log("Player 1 is victorious");
} else if (this.player1.getScore() < this.player2.getScore()) {
    console.log("Player 2 is victorious");
} else {
    console.log("It is a draw");
}

        }
    }
    
    

function BuildDeck()
{

   deckofcards = [];
  
   //This is where the 52 cards are instantiated.  The card constructor
   //will derive the card name based on passed values.
       for (let i = 2; i < 15; i++) {
           deckofcards.push(new Card(i, "Diamonds"));
           deckofcards.push(new Card(i, "Hearts"));
           deckofcards.push(new Card(i, "Clubs"));
           deckofcards.push(new Card(i, "Spades"));
         }  
    return deckofcards;
}    

//The shuffle method is used to randomly interchange 
//the list of cards.
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }




let war = new Game();
war.start();
