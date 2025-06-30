import React, { useEffect, useState } from 'react'
import AddCommentForm from '../components/AddCommentForm'
import CommentList from '../components/CommentList'
import Header from '../components/Header'

const Car = () => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/comments')
      .then(res=>res.json())
      .then(setComments)
  }, [])

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment])
  }

  return (
    <div>
      <Header />
      <main id='car-content'>
        <div id='car-container'>
          <img src='./imgs/NiCar.png' alt='vroom' />
        </div>
        <CommentList comments={comments} />
      </main>
      <AddCommentForm onNewComment={handleAddComment}/>
    </div>
  )
}

export default Car
