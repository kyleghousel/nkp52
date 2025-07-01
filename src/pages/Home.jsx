import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import "../index.css"

const Home = () => {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/random'))
      .then(res => res.json())
      .then(data => {
        const parsed = JSON.parse(data.contents)
        setQuote(parsed[0].q)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <Header />
      <main className='container text-center d-flex flex-column justify-content-evenly' style={{ height: '80vh' }}>
        <h3>A fan page for Nihar Patel.</h3>
        <img src="/imgs/NiharHead.png" alt="Nihar Headshot" id="nihead" />
        {quote
          ? <blockquote className="mt-4 fst-italic">"{quote}" - Nihar Patel</blockquote>
          : <blockquote className="mt-4 fst-italic">"React is CRAZY!"</blockquote>
        }
      </main>
    </div>
  )
}

export default Home
