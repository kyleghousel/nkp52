import React from 'react'

const SoundCard = ({ sound }) => {

  const { audio, id, name, image } = sound

  return (
    <div id={id} className="card h-100 soundCard">
      <img src={image} alt={name} />
      <h4 className="card-body text-center">{name}</h4>
    </div>
  )
}

export default SoundCard
