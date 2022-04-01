import './App.scss';
import { useState, useEffect } from 'react';
import { BsTwitter } from 'react-icons/bs'
import { IconContext } from 'react-icons';


function App() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const [color, setColor] = useState('')
  const url = 'https://api.quotable.io/random'

  const handleClick = async () => {
    const colorArr = ['LightSlateGrey', 'RosyBrown', 'Brown', 'CadetBlue', 'IndianRed', 'PaleVioletRed', 'SeaGreen', 'Teal', 'Tomato', 'Tan', 'SteelBlue']
    const randomColor = colorArr[Math.floor(Math.random() * colorArr.length)]
    const response = await fetch(url)
    const data = await response.json()
    setQuote(data?.content)
    setAuthor(data?.author)
    setColor(randomColor)
  }
  useEffect(() => {
    handleClick()
  }, [])

  return (
    <div className="App" style={{ backgroundColor: color }} >
      <div id='quoteBox'>
        <span id='text' style={{ color: color }}>"{quote}"</span>
        <span id='author' style={{ color: color }}>- {author}</span>
        <div id='btnContainer'>
          <button id='newQuote' onClick={handleClick} style={{ backgroundColor: color }}>New Quote</button>
          <a href={`https://twitter.com/intent/tweet?text=${quote}%20-${author}&hashtags=quotes`} id='tweet-quote'>
            <IconContext.Provider value={{ size: '2em', color: color }} >
              <BsTwitter id='twitterIcon' />
            </IconContext.Provider>
          </a>
        </div>
      </div>
    </ div >
  );
}

export default App;
