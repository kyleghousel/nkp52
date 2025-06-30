import React from 'react'

const SoundCard = ({ sound }) => {

  const { audio, id, name, image } = sound

  const playSound =  () => {
    const soundPath = `${process.env.PUBLIC_URL}${audio}`;
    const audioPlayer = new Audio(soundPath);
    audioPlayer.play();
  }

  return (
    <div id={id} className="card h-100 soundCard" onClick={playSound}>
      <img src={image} alt={name} />
      <h4 className="card-body text-center">{name}</h4>
    </div>
  )
}

export default SoundCard
