import React, { useEffect, useRef } from 'react'
import Header from '../components/Header'

const Nicar = () => {
  const audio1Ref = useRef(null)
  const audio2Ref = useRef(null)

  useEffect(() => {
    alert(`Oh no! You have awakened Nicar.\n Don't look him in the eyes!!!`)
  }, [])

  useEffect(() => {
    const sound1 = new Audio('/sounds/choir.wav')
    const sound2 = new Audio('/sounds/rev.wav')

    sound1.loop = true
    sound2.loop = true

    sound1.play()
    sound2.play()

    audio1Ref.current = sound1
    audio2Ref.current = sound2

    return () => {
      sound1.pause()
      sound1.currentTime = 0
      sound2.pause()
      sound2.currentTime = 0
    }
  }, [])

  return (
    <>
      <Header />
      <div className='container m-0-auto d-flex flex-column justify-content-center align-items-center' style={{ height: '80vh' }}>
        <img src='./imgs/NiCar.png' alt='vroom' className='img-fluid zoom-in' />
      </div>
    </>
  )
}

export default Nicar
