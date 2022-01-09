import LoginCard from 'components/layout/LoginCard'
import UserCreateForm from './UserCreateForm'

const UserCreateFormContainer = () => {
  return (
    <LoginCard>
      <div
        className="p-2 flex items-center flex-col mb-8 
    "
      >
        <div className=" rounded-xl">
          <h1 className="text-6xl  mt-12 mb-10 px-12">
            Sign Up for <span className="text-green-400">Rewards</span>
          </h1>
        </div>
        <div className="mt-12">
          <UserCreateForm />
        </div>
      </div>
    </LoginCard>
  )
}

export default UserCreateFormContainer
