import { useEffect, useState } from 'react'
import AddCommentForm from './AddCommentForm'
import Comment from './Comment'

type CommentData = {
  id: number;
  comment: string;
  user: string;
};

const CommentList = () => {

  const [comments, setComments] = useState<CommentData[]>([])

  useEffect(() => {
    fetch('https://nkp52-backend.onrender.com/comments')
      .then(res=>res.json() as Promise<CommentData[]>)
      .then(setComments)
  }, [])

  const handleAddComment = (newComment: CommentData) => {
    setComments([...comments, newComment])
  }

  const handleDeleteComment = (newCommentId: number) => {
    setComments(comments.filter(comment => comment.id !== newCommentId))
  }

  const handleUpdate = (updatedComment: CommentData) => {
    setComments((prev) =>
      prev.map((comment) => (comment.id === updatedComment.id ? updatedComment : comment))
    )
  }

  const renderComments = comments.map((comment) => (
    <Comment key={comment.id} comment={comment} onDelete={handleDeleteComment} onUpdate={handleUpdate} />
  ))

  return (
    <div className='d-flex flex-column align-items-center w-30 mx-2' id='comment-list'>
      <h2>Hype For Nihar's Car</h2>
      <AddCommentForm onNewComment={handleAddComment} />
      <div
        className='w-100 overflow-auto responsive-comment-scroll'
      >
        {renderComments}
      </div>
    </div>
  )
}

export default CommentList
