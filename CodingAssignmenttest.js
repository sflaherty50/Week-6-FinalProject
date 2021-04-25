var expect = chai.expect;

describe('All Functions', function(){
    describe('Test building a card deck', function(){
        it('should return an array of 52 occurrences of a card', 
        function(){
            deckofcards = []
            let deckofcards = BuildDeck();
            expect(deckofcards.length).to.equal(52);
        });

        });


    describe('All Functions', function(){
        describe('Test building a card deck', function(){
            it('should return an array of 52 occurrences of a card', 
            function(){
                sdeckofcards = []
                let sdeckofcards = Shuffle();
                expect(sdeckofcards.length).to.equal(52);
            });


        });
    })})