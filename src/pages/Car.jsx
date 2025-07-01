import React, { useEffect, useState } from 'react'
import CommentList from '../components/CommentList'
import Header from '../components/Header'

const Car = () => {

  return (
    <div>
      <Header />
      <main id='car-content'>
        <div>
          <div id="carouselExampleAutoplaying" className="carousel carousel-slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={{backgroundColor: 'black'}}></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{backgroundColor: 'black'}}></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" style={{backgroundColor: 'black'}}></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/imgs/ford1.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/imgs/ford2.png" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="/imgs/ford3.png" className="d-block w-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor: 'black'}}></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor: 'black'}}></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <CommentList />
      </main>
    </div>
  )
}

export default Car
