import { LoginCardProps } from 'interfaces'
const LoginCard = ({ children }: LoginCardProps): JSX.Element => {
  return <div className="shadow-xl">{children}</div>
}

export default LoginCard
