import React from 'react'

const SoundCard = ({ sound }) => {

  const { audio, id, name, image } = sound

  return (
    <div id={id}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
    </div>
  )
}

export default SoundCard
