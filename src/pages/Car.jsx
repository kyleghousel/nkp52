import React, { useEffect, useState } from 'react'
import CommentList from '../components/CommentList'
import Header from '../components/Header'

const Car = () => {

  return (
    <div>
      <Header />
      <main id='car-content'>
        <div className='container m-0 d-flex justify-content-center'>
          <img src='./imgs/NiCar.png' alt='vroom' className='img-fluid' />
        </div>
        <CommentList />
      </main>
    </div>
  )
}

export default Car
