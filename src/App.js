import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';


function App() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const url = 'https://api.quotable.io/random'
  const handleQuote = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setQuote(data?.content)
    setAuthor(data?.author)
  }
  useEffect(() => {
    handleQuote()
  }, [])

  return (
    <div className="App">
      <div id='quote-box'>
        <span id='text'>"{quote}"</span>
        <span id='author'>{author}</span>
        <button id='new-quote' onClick={handleQuote}>New Quote</button>
        <a href={`https://twitter.com/intent/tweet?text=${quote}%20-${author}&hashtags=quotes`} id='tweet-quote'>Tweet Quote</a>
      </div>
    </div >
  );
}

export default App;
