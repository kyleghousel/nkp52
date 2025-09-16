import { useState, useEffect } from 'react'
import Header from '../components/Header'
import SoundList from '../components/SoundList'

interface SoundData {
  id: string,
  clicks: number,
  name: string,
  image: string,
  audio: string,
}

const Soundboard = () => {
  const [sounds, setSounds] = useState<SoundData[]>([])
  const [sort, setSort] = useState('')

  useEffect(() => {
    fetch('https://nkp52-backend.onrender.com/sounds')
      .then(res=>res.json() as Promise<SoundData[]>)
      .then(setSounds)
  }, [])

  const handleChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value)
  }

  const handleUpdate = (updatedSound: SoundData) => {
    setSounds((prev) =>
      prev.map((sound) => (sound.id === updatedSound.id ? updatedSound : sound))
    )
  }

  return (
    <div>
      <Header />
      <div className='container mt-4'>
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
