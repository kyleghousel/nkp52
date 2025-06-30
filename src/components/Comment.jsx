import React from 'react'

const Comment = ({ comment }) => {

  const handleEdit = () => {

  }

  const handleDelete = () => {
    fetch('http://localhost:3001/comments/'+comment.id, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          console.log('byebye');
        } else {
          throw new Error("Delete failed");
        }
      })
      .catch(error => console.error(error));
  }

  return (
    <div>
      <h5>{comment.comment}</h5>
      <p>{comment.user}</p>
      <button onClick={handleEdit}>✏️</button>
      <button onClick={handleDelete}>❌</button>
    </div>
  )
}

export default Comment
