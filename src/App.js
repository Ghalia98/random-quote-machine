import './App.scss';
import { useEffect } from 'react';
import { useState } from 'react';


function App() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const [color, setColor] = useState('')
  const url = 'https://api.quotable.io/random'

  const handleClick = async () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
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
    <div className="App" style={{ backgroundColor: color }}>
      <div id='quote-box'>
        <span id='text' style={{ color: color }}>"{quote}"</span>
        <span id='author' style={{ color: color }}>- {author}</span>
        <button id='new-quote' onClick={handleClick}>New Quote</button>
        <a href={`https://twitter.com/intent/tweet?text=${quote}%20-${author}&hashtags=quotes`} id='tweet-quote'>Tweet Quote</a>
      </div>
    </div >
  );
}

export default App;
