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

const Color = {
  Joy: 'yellow',
  Sadness: '#77FFFF',
  Anticipation: 'yellow',
  Surprise: 'red',
  Anger: 'red',
  Fear: 'blue',
  Disgust: 'red',
  Trust: 'yellow',
}

function colorChanger(emotions: Emotions) {
  console.log(emotions)
  const arr = [
    {
      key: 'joy',
      value: emotions.joy,
    },
    {
      key: 'sadness',
      value: emotions.sadness,
    },
    {
      key: 'anticipation',
      value: emotions.anticipation,
    },
    {
      key: 'surprise',
      value: emotions.surprise,
    },
    {
      key: 'anger',
      value: emotions.anger,
    },
    {
      key: 'fear',
      value: emotions.fear,
    },
    {
      key: 'disgust',
      value: emotions.disgust,
    },
    {
      key: 'trust',
      value: emotions.trust,
    },
  ]
  const result = arr.map(function (p) {
    return p.value
  })
  console.log(Math.max.apply(null, result)) // 25

  let emotion = ''
  arr.forEach((a) => {
    if (a.value === Math.max.apply(null, result)) {
      emotion = a.key
    }
  })

  switch (emotion) {
    case 'joy':
      return Color.Joy
    case 'sadness':
      return Color.Sadness
    case 'anticipation':
      return Color.Anticipation
    case 'surprise':
      return Color.Surprise
    case 'anger':
      return Color.Anger
    case 'fear':
      return Color.Fear
    case 'disgust':
      return Color.Disgust
    case 'trust':
      return Color.Trust
    default:
      return '#e0e0e0'
  }
}

const style = {
  sub: {
    fontSize: '0.7em',
  },
}
