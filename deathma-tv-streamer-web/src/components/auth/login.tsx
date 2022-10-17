import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <button
      className={'btn btn-primary btn-lg'}
      style={style.button}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  )
}

export default LoginButton

const style = {
  button: {
    borderRadius: '10px 10px 10px 10px',
    padding: '10px 30px',
  },
}
