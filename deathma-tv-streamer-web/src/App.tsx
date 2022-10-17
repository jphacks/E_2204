import Stream from '@/views/stream'
import './App.css'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '@/components/auth/login'
import backStyle from './App.module.css'

function App() {
  const { user } = useAuth0()

  if (!user) {
    return (
      <div className={'d-flex flex-column align-items-center'}>
        <h1 style={style.header}>ログインする</h1>
        <LoginButton />
      </div>
    )
  }

  console.log('app')

  return (
    <div className={'App'}>
      <div className={backStyle.back}>
        <Stream user={user} />
      </div>
    </div>
  )
}

export default App
const style = {
  header: {
    flex: '1',
    fontSize: '3rem',
    fontFamily: 'DotGothic16',
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
  },
  userIcon: {
    height: '50px',
    borderRadius: '50%',
  },
  back: {
    backgroundImage: `url(`,
  },
}
