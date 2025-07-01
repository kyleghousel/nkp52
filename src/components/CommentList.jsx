import React, { useEffect, useState } from 'react'
import AddCommentForm from './AddCommentForm'
import Comment from './Comment'

const CommentList = () => {

  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch('https://nkp52-backend.onrender.com/comments')
      .then(res=>res.json())
      .then(setComments)
  }, [])

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment])
  }

  const handleDeleteComment = (newCommentId) => {
    setComments(comments.filter(comment => comment.id !== newCommentId))
  }

  const handleUpdate = (updatedComment) => {
    setComments((prev) =>
      prev.map((comment) => (comment.id === updatedComment.id ? updatedComment : comment))
    )
  }

  const renderComments = comments.map((comment) => (
    <Comment key={comment.id} comment={comment} onDelete={handleDeleteComment} onUpdate={handleUpdate} />
  ))

  return (
    <div className='d-flex flex-column align-items-center w-30 mx-2'>
      <h2>Hype For Nihar's Car</h2>
      <AddCommentForm onNewComment={handleAddComment} />
      <div
        className="w-100 overflow-auto responsive-comment-scroll"
      >
        {renderComments}
      </div>
    </div>
  )
}

export default CommentList
