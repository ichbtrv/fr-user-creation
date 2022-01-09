import Router from 'next/router'
import { useForm } from 'react-hook-form'
import { useGetForm } from './hooks/useGetForm'
import { postForm } from './util'

const UserCreateForm = () => {
  const { data } = useGetForm()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (submittedFormData) => {
    // postForm returns a boolean evaluating whether or not
    // the post request returned a 200 or not
    const success = postForm(submittedFormData)
    if (success) {
      Router.push('/newuser')
    }
  }

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
      <div className="flex flex-col my-8 h-12 w-80 p-1">
        <input
          type="password"
          placeholder="Password"
          {...register('password', { required: true, minLength: 8 })}
          className="px-1 py-2 rounded-lg"
        />
        <div hidden={!errors.password} className="text-sm px-1 text-slate-600">
          Password must be atleast 8 characters long
        </div>
      </div>
      <div className="flex flex-col my-8 h-12">
        <select
          className="px-2 py-2 rounded-lg  hover:cursor-pointer "
          placeholder="Occupation"
          {...register('occupation', {
            required: true,
            validate: (value) => value !== 'default',
          })}
        >
          <option value={'default'} aria-disabled aria-hidden>
            Occupation
          </option>
          {data ? (
            data.occupations.map((occupation) => (
              <option value={occupation} key={occupation}>
                {occupation}
              </option>
            ))
          ) : (
            // Set the default option to the first Occupation in list as a fallback
            // in the case of slow connection. Ideally I would have implemented a lib of fallback
            // options, but for the sake of this exercise I left it as such
            <option value={'Head of Shrubbery'}>Head of Shrubbery</option>
          )}
        </select>
        <div
          hidden={!errors.occupation}
          className="text-sm  px-2 my-1 text-slate-600"
        >
          Choose an occupation
        </div>
      </div>
      <div className="flex flex-col  h-12 my-8">
        <select
          className="px-2 py-2 rounded-lg hover:cursor-pointer"
          {...register('state', {
            required: true,
            validate: (value) => value !== 'default',
          })}
        >
          <option value="default" aria-disabled aria-hidden>
            State of Residence
          </option>
          {data ? (
            data.states.map((state) => (
              <option value={state.name} key={state.name}>
                {state.name}
              </option>
            ))
          ) : (
            //Fallback (same idea as the occupation fallback)
            <option value={'Alabama'}>Alabama</option>
          )}
        </select>
        <div
          hidden={!errors.state}
          className="text-sm my-1 px-2 text-slate-600"
        >
          Choose a state
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
