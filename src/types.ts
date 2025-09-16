export type CommentData = {
  id: number;
  comment: string;
  user: string;
};

export type AddCommentFormProps = {
  onNewComment: (newComment: CommentData) => void;
};

export type SoundData = {
  id: string,
  name: string,
  image: string,
  clicks: number,
  audio: string,
};
