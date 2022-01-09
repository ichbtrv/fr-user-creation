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

  return <form onSubmit={handleSubmit(onSubmit)}>UserCreateForm</form>
}

export default UserCreateForm
