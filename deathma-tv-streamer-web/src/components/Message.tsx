import { Emotions } from '@/layouts/Chat'
import { format } from 'date-fns'
import ja from 'date-fns/locale/ja'

interface Props {
  name: string
  message: string
  emotions: Emotions
}

const initState = {
  name: '',
  message: '',
  emotions: {
    joy: 0,
    sadness: 0,
    anticipation: 0,
    surprise: 0,
    anger: 0,
    fear: 0,
    disgust: 0,
    trust: 0,
  },
}
export const Message = (state: Props = initState) => {
  return (
    <div className={'d-flex flex-column'}>
      <p
        style={{
          borderRadius: '10px 10px 10px 10px',
          background: state.emotions ? colorChanger(state.emotions) : '#e0e0e0',
          padding: '10px 20px',
          marginBottom: '0',
        }}
      >
        {state.message}
      </p>
      <div
        className={'d-flex flex-row justify-content-between'}
        style={style.sub}
      >
        <p>{state.name}</p>
        <p>{format(new Date(), 'yyyy/MM/dd HH:mm', { locale: ja })}</p>
        <p>{state.emotions && state.emotions.joy}</p>
      </div>
    </div>
  )
}

interface Color {
  Joy: 'yellow'
  Sadness: '#77FFFF'
  Anticipation: 'yellow'
  Surprise: 'red'
  Anger: 'red'
  Fear: 'blue'
  Disgust: 'red'
  Trust: 'yellow'
}

function colorChanger(emotions: Emotions) {
  console.log(emotions)
  const arr = [
    {
      value: emotions.joy,
    },
    {
      value: emotions.sadness,
    },
    {
      value: emotions.anticipation,
    },
    {
      value: emotions.surprise,
    },
    {
      value: emotions.anger,
    },
    {
      value: emotions.fear,
    },
    {
      value: emotions.disgust,
    },
    {
      value: emotions.trust,
    },
  ]
  var result = arr.map(function (p) {
    return p.value
  })
  console.log(Math.max.apply(null, result)) // 25

  return '#000000'
}

const style = {
  sub: {
    fontSize: '0.7em',
  },
}
