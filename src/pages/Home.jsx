import React from 'react'
import Header from '../components/Header'
import "../index.css"

const Home = () => {
  return (
    <div>
      <Header />
      <main className='container text-center d-flex flex-column justify-content-evenly' style={{ height: '80vh' }}>
        <h3>A fan page for Nihar Patel.</h3>
        <img src="/imgs/NiharHead.png" alt="Nihar Headshot" id="nihead" />
        <h4>React is <em>crazy</em>!</h4>
      </main>

    </div>
  )
}

export default Home
