import React from 'react'
import Header from '../components/Header'
import "../index.css"

const Home = () => {
  return (
    <div>
      <Header />
      <main className='container text-center d-flex flex-column justify-content-evenly' style={{ height: '80vh' }}>
        <img src="/imgs/NiharHead.png" alt="Nihar Headshot" id="nihead" />
        <h2>React is <em>crazy</em>!</h2>
      </main>

    </div>
  )
}

export default Home
