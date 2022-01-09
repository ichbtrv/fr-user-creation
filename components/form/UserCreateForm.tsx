import { useForm } from 'react-hook-form'
import { useGetForm } from './hooks/useGetForm'

const UserCreateForm = () => {
  const { data } = useGetForm()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (submittedFormData) => {}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col my-4 h-12 p-1  ">
        <input
          type="text"
          placeholder="Full Name"
          {...register('name', {
            required: true,
            maxLength: 80,
            minLength: 1,
            pattern: /^[a-z ,.'-]+$/i,
          })}
          className="px-1 py-2 rounded-lg "
        />
        <div hidden={!errors.name} className="text-sm  px-1 text-slate-600">
          Please enter your full name
        </div>
      </div>
      <div className="flex flex-col my-8 h-12 p-1">
        <input
          type="email"
          placeholder="Email"
          className="px-1 py-2 rounded-lg"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        <div hidden={!errors.email} className="text-sm  px-1 text-slate-600">
          Please enter a valid email
        </div>
      </div>
      <button
        type="submit"
        className="border-2 rounded-lg w-full mt-4 px-4 py-2 border-black hover:bg-black hover:text-white"
      >
        Submit
      </button>
    </form>
  )
}

export default UserCreateForm
