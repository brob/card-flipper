import { useState, useEffect } from 'react';
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from 'sanity:client';

const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
  return builder.image(source)
}
// fucntion to get random item from array
const getRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}



export const CardInterface = ({ cards }) => {

    // react code to shuffle the cards
    const [shuffling, setShuffling] = useState(false);
    const [shuffledCards, setShuffledCards] = useState(cards);
    const [selectedCard, setSelectedCard] = useState(null);
    useEffect(() => {
        const shuffled = [...cards].sort(() => Math.random() - 0.5);
        setShuffledCards(shuffled);

        
    }, []);
    function shuffleThings() {
        const shuffled = [...cards].sort(() => Math.random() - 0.5);
        setShuffledCards(shuffled);
    }
    const handleShuffle = () => {
        setShuffling(true);
        
        const shuffleInterval = setInterval(shuffleThings, Math.floor(Math.random() * (400 - 100 + 1)) + 100);

        // wait 2 seconds and then setshuffling to false
        setTimeout(() => {
 
            setShuffling(false);
            clearInterval(shuffleInterval);
            const shuffled = [...cards].sort(() => Math.random() - 0.5);
            setShuffledCards(shuffled);
            setSelectedCard(shuffled[shuffled.length - 1]); // Select the first card after shuffling
        }, 2000);
    }


    // only show description when the card is first in array
    return (
        <>
            <div className="card-stack">
                {shuffledCards.map((card, index) => (
                    <div className="card" data-index={index} key={card.id || index}>
                        <div className="card-content">
                        <img  src={urlFor(card.image).width(150).url()} />

                            
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={handleShuffle} className="shuffle-button">Reveal a random card</button>

                {selectedCard && <div className="card-info">
                    <h2>{selectedCard.title}</h2>
                    <PortableText
                        value={selectedCard.content}
                    />
                </div>}


        </>

    )
}