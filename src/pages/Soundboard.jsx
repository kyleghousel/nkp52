import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import SoundList from '../components/SoundList'

const Soundboard = () => {
  const [sounds, setSounds] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/sounds')
      .then(res=>res.json())
      .then(setSounds)
  }, [])

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2 className="text-center mb-4">Nihar Soundboard</h2>
        <SoundList sounds={sounds} />
      </div>
    </div>
  )
}

export default Soundboard
