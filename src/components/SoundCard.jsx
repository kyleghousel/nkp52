import React from 'react'

const SoundCard = ({ onUpdate, sound }) => {

  const { audio, clicks, id, name, image } = sound

  const playSound =  () => {
    const soundPath = `${process.env.PUBLIC_URL}${audio}`;
    const audioPlayer = new Audio(soundPath);
    audioPlayer.play();

    fetch('http://localhost:3001/sounds/'+id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clicks: Number(clicks) + 1 }),
      })
        .then((res) => {
          if (!res.ok) throw new Error("Edit failed");
          return res.json();
        })
        .then(updatedSound => onUpdate(updatedSound))
        .catch((err) => console.error(err));
  }

  return (
    <div id={id} className="card h-100 soundCard" onClick={playSound}>
      <img src={image} alt={name} />
      <h4 className="card-body text-center">{name}</h4>
    </div>
  )
}

export default SoundCard
