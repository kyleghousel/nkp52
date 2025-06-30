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
      <SoundList sounds={sounds} />
    </div>
  )
}

export default Soundboard
