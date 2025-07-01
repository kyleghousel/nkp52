import React from 'react'
import SoundCard from './SoundCard'

const SoundList = ({ onUpdate, sort, sounds }) => {

  const sortSounds = [...sounds].sort((a,b) => {
    switch (sort) {
      case 'popular':
        return b.clicks - a.clicks
      case 'alphabetical':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  const renderSounds = sortSounds.map((sound) => (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={sound.id}>
      <SoundCard onUpdate={onUpdate} sound={sound} />
    </div>
  ))

  return (
    <div className="container mt-4">
      <div className="row">
        {renderSounds}
      </div>
    </div>
  )
}

export default SoundList
