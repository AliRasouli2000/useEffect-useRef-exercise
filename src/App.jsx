import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import DrawCardButton from "./DrawCardButton";
import DrawCard from "./DrawCard";


function App() {

  const [count, setCount] = useState(0);
  const didFetch = useRef(false);
  const cardsRef = useRef([])
  
  const newCount = () => {
    setCount(prev => prev + 1);
    console.log(count);
  }

  
 let fetchCards;

  fetchCards = async () => {
    const res = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52");
    const data = await res.json();
    cardsRef.current = data.cards;
    console.log(cardsRef.current);
    console.log(cardsRef.current.slice(0, count));
  };

  useEffect(() => {
    fetchCards();
  }, []);


  return (
    <div className="App">
      <div className="button-container">
        <DrawCardButton newCount={newCount} />
      </div>
      <div className="card-container">
        {cardsRef.current.slice(0, count).map((card) => {
          return <DrawCard key={card.code} cards={cardsRef.current} count={count} card={card} />
        })}
        </div>

        {count > 52 && <alert style={{ color: 'red' }} className='alert'>Error! No cards remaining!</alert>}

        <br />

        {count > 52 && <button className='reset' onClick={() => {
          fetchCards()
          setCount(0)
        }}>Reset Deck</button>}

      </div>

    
  )
}


export default App;
