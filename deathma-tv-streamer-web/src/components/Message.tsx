import { format } from 'date-fns'
import ja from 'date-fns/locale/ja'

interface Props {
  name: string
  message: string
}

const initState = {
  name: '',
  message: '',
}
export const Message = (state: Props = initState) => {
  return (
    <div className={'d-flex flex-column'}>
      <p style={style.main}>{state.message}</p>
      <div
        className={'d-flex flex-row justify-content-between'}
        style={style.sub}
      >
        <p>{state.name}</p>
        <p>{format(new Date(), 'yyyy/MM/dd HH:mm', { locale: ja })}</p>
      </div>
    </div>
  )
}

const style = {
  main: {
    borderRadius: '10px 10px 10px 10px',
    background: '#e0e0e0',
    padding: '10px 20px',
    marginBottom: '0',
  },
  sub: {
    fontSize: '0.7em',
  },
}
