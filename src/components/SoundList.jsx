import React from 'react'
import SoundCard from './SoundCard'

const SoundList = ({ sounds }) => {

  const renderSounds = sounds.map((sound) => (
    <SoundCard key={sound.id} sound={sound} />
  ))

  return (
    <div>
      {renderSounds}
    </div>
  )
}

export default SoundList
