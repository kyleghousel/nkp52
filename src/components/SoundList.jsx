import React from 'react'
import SoundCard from './SoundCard'

const SoundList = ({ sounds }) => {

  const renderSounds = sounds.map((sound) => (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={sound.id}>
      <SoundCard sound={sound} />
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
