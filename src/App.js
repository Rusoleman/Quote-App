import React, {useState, useEffect} from 'react';
import Data from './quotes.json';
import QuoteBox from './QuoteBox.js';
import Button from './Button.js';
import ButtonLink from './Link.js';
import { FaTwitter } from 'react-icons/fa'
import './App.css';

const ShowQuote = ({colorButton}) => {
  const [actualQuote,setQuote] = useState("");
  const [actualAuthor,setAuthor] = useState("");

  useEffect(() => {
    handleClick()
  }, [])
 
  const handleClick = () => {
    let randomValue = Math.floor(Math.random() * (102 - 0)) + 0;
    const data = Data.quotes[randomValue];
   
    setAuthor(data.author);
    setQuote(data.quote);
  }

  return(
    <div>
      <h2></h2>
      <QuoteBox   title={actualAuthor} text={actualQuote} 
        element={
          <Button changeColor={colorButton} handler={handleClick} nameButton="New Quote" 
          secondButton={
            <ButtonLink quotes={actualQuote} author={actualAuthor} content={<FaTwitter/>}/>
          }/>
        }/>
    </div>
  )
}

function App() {
  const [actualColor,setColor] = useState("#000000")

  function generateLetter(){
    var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
    var numero = (Math.random()*15).toFixed(0);
      return letras[numero];
    }
      function colorHEX() {
        var color = "";
        for(var i=0;i<6;i++){
          color = color + generateLetter();
        }
        const responseColor = "#" + color;
        setColor(responseColor);
      }
      


  return (
    <div className="App" style={{backgroundColor: actualColor}}>
       <ShowQuote colorButton={colorHEX}/>
    </div>
    
  );
}

export default App;
