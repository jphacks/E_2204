import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <button
      className={'btn btn-lg'}
      style={style.button}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </button>
  )
}

export default LogoutButton
const style = {
  button: {
    borderRadius: '10px 10px 10px 10px',
    padding: '10px 30px',
  },
}
