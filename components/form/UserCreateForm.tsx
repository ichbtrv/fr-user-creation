import { useForm } from 'react-hook-form'
import { useGetForm } from './hooks/useGetForm'

const UserCreateForm = () => {
  const { data } = useGetForm()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return <div>UserCreateForm</div>
}

export default UserCreateForm
