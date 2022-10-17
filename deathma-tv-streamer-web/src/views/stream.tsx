import { Chat } from '@/layouts/Chat'
import Header from '@/layouts/Header'
import Player from '@/layouts/Player'
import { User } from '@auth0/auth0-react'

import { useState } from 'react'
import { ProgressBar } from '@/components/ProgressBar'
import LoginButton from '@/components/auth/login'

interface Props {
  user: User
}

function Stream(props: Props) {
  const [name, setName] = useState('anonymous')

  return (
    <div>
      {props.user ? (
        <div className={'d-flex flex-column justify-content-between'}>
          <div>
            <Header user={props.user} />
            <ProgressBar />
          </div>
          <div>
            <div className={'d-flex flex-row justify-content-evenly'}>
              <Player></Player>
              <Chat name={name} text={''} />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 style={style.header}>ログイン</h1>
          <LoginButton />
        </div>
      )}
    </div>
  )
}

export default Stream
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
}
