import React from 'react'
import Comment from './Comment'

const CommentList = ({ comments }) => {

  const renderComments = comments.map((comment) => (
    <Comment comment={comment} />
  ))
  return (
    <div id='comment-list'>
      <h2>Hype For Nihar's Car</h2>
      {renderComments}
    </div>
  )
}

export default CommentList
