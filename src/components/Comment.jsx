import React from 'react'

const Comment = ({ comment }) => {
  return (
    <div>
      <h5>{comment.comment}</h5>
      <p>{comment.user}</p>
      <button>✏️</button>
      <button>❌</button>
    </div>
  )
}

export default Comment
