import React from 'react'
import Header from '../components/Header'
import "../index.css"

const Home = () => {
  return (
    <div>
      <Header />
      <main className='container text-center'>
        <img src="/imgs/NiharHead.png" alt="Nihar Headshot" id="nihead" />
        <h2>React is crazy!</h2>
      </main>

    </div>
  )
}

export default Home
