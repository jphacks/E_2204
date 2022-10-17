// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import LoginButton from '@/components/auth/login'
import { User } from '@auth0/auth0-react'
import LogoutButton from '@/components/auth/logout'

interface Props {
  user: User
}

const Header = (props: Props) => {
  return (
    <div className="header">
      <div
        className={'d-flex flex-row align-content-center align-items-center'}
      >
        <div className="title" style={style.header}>
          デスマTV
        </div>
        {props.user ? (
          <div
            className={
              'd-flex flex-row justify-content-between align-content-centers'
            }
          >
            <img src={props.user.picture} css={style.userIcon} />
            <LogoutButton />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

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
export default Header
