import React, { useState } from 'react';

const Comment = ({ comment, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.comment);

  const finishEditing = () => {
    if (editedComment !== comment.comment) {
      fetch(`http://localhost:3001/comments/${comment.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment: editedComment }),
      })
        .then((res) => {
          if (!res.ok) throw new Error("Edit failed");
          return res.json();
        })
        .then(updated => onUpdate(updated))
        .catch((err) => console.error(err));
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      finishEditing();
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    fetch(`http://localhost:3001/comments/${comment.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          onDelete(comment.id);
        } else {
          throw new Error("Delete failed");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      {isEditing ? (
        <input
          value={editedComment}
          onChange={(e) => setEditedComment(e.target.value)}
          onBlur={finishEditing}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <h5>{comment.comment}</h5>
      )}
      <p>{comment.user}</p>
      <button onClick={handleEdit}>✏️</button>
      <button onClick={handleDelete}>❌</button>
    </div>
  );
};

export default Comment;
