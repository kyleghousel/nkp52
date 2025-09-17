import type { AddCommentFormProps } from "../types"
import { useForm } from 'react-hook-form';
import type { FieldErrors } from 'react-hook-form';

type FormValues = {
  comment: string,
  user: string
};

const AddCommentForm = ({ onNewComment }: AddCommentFormProps) => {
  const form = useForm<FormValues>({
    defaultValues: {
      comment: "Wow! Cool car!",
      user: "No one"
    },
    mode: "onTouched"
  });

  const { register, handleSubmit, formState, reset } = form;
  const { errors, isDirty, isValid, isSubmitting, } = formState

  const onSubmit = (data: FormValues) => {
    fetch('https://nkp52-backend.onrender.com/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(newComment => {
        onNewComment(newComment)
        reset()
      })
      .catch(error => alert(error))
  }

  const onError = (errors: FieldErrors<FormValues>) => console.log(errors)

  return (
    <div className='container-sms' id='form-container'>
      <form className='row w-100 g-2 flex-wrap' onSubmit={handleSubmit(onSubmit, onError)} noValidate>

        <div className='col-12 col-md-5'>
          <label className='form-label'>Comment</label>
          <input
            type='text'
            id='comment'
            {...register("comment", {
            required: 'Comment is required'
          })} />

          <p className='error'>{errors.comment?.message}</p>

        </div>

        <div className='col-12 col-md-4'>
          <label className='form-label'>Name</label>
          <input
            type='text'
            id='user'
            {...register("user", {
            required: 'Name is required',
            validate: {
              notNihar: fieldValue => {
                return (
                  fieldValue !== "Nihar" || "Pause"
                )
              },
            }
            })} />

          <p className='error'>{errors.user?.message}</p>

        </div>

        <div className='col-auto ms-auto'>
         <button type='submit' className='btn btn-primary w-100 fs-7' disabled={!isDirty || !isValid || isSubmitting}>Add</button>
        </div>

      </form>
    </div>
  )
}

export default AddCommentForm
