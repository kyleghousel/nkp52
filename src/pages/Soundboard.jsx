import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import SoundList from '../components/SoundList'

const Soundboard = () => {
  const [sounds, setSounds] = useState([])
  const [sort, setSort] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/sounds/')
      .then(res=>res.json())
      .then(setSounds)
  }, [])

  const handleChangeSort = (e) => {
    setSort(e.target.value)
  }

  const handleUpdate = (updatedSound) => {
    setSounds((prev) =>
      prev.map((sound) => (sound.id === updatedSound.id ? updatedSound : sound))
    )
  }

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2 className='text-center mb-4'>Nihar Soundboard</h2>
        <select className='form-select' id='sort-select' onChange={handleChangeSort}>
          <option selected value=''>Sort by</option>
          <option value='popular'>Popular</option>
          <option value='alphabetical'>Alphabetical</option>
        </select>
        <SoundList onUpdate={handleUpdate} sort={sort} sounds={sounds} />
      </div>
    </div>
  )
}

export default Soundboard
