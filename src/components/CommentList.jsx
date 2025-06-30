import React from 'react'
import Comment from './Comment'

const CommentList = ({ comments, onDelete, onUpdate }) => {

  const renderComments = comments.map((comment) => (
    <Comment key={comment.id} comment={comment} onDelete={onDelete} onUpdate={onUpdate} />
  ))

  return (
    <div id='comment-list container mt-4'>
      <h2>Hype For Nihar's Car</h2>
      {renderComments}
    </div>
  )
}

export default CommentList
