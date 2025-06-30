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
    <div className="card mb-3 shadow-sm">
      <div className="card-body d-flex flex-column">
        {isEditing ? (
          <input
            value={editedComment}
            className="form-control mb-2"
            onChange={(e) => setEditedComment(e.target.value)}
            onBlur={finishEditing}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <p className="card-text mb-1">{comment.comment}</p>
        )}
        <small className="text-muted">— {comment.user}</small>
        <div className="mt-2">
          <button className="btn btn-sm btn-outline-primary me-2" onClick={handleEdit}>
            <i className="bi bi-pencil-square"></i>
          </button>
          <button className="btn btn-sm btn-outline-danger"  onClick={handleDelete}>
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
