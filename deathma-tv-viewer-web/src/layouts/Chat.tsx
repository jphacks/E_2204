import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Message } from '@/components/Message'
import { ChatService, KEY_SEND_MONEY } from '@/utils'
import { Money } from '@/components/Money'
import Sound from '/src/money-drop2.mp3'
import useSound from 'use-sound'
import Sound2 from '/src/clearing1.mp3'

interface Props {
  name: string
  text: string
}

export interface Emotions {
  joy: number
  sadness: number
  anticipation: number
  surprise: number
  anger: number
  fear: number
  disgust: number
  trust: number
}

const initState: Props = { name: '', text: '' }

interface ChatProps {
  name: string
  text: string
  emotions: Emotions
}

export const Chat = (state: Props = initState) => {
  const [play, { stop, pause }] = useSound(Sound)
  const [play2] = useSound(Sound2)

  const [messages, sendMessage, money, otherMoney] = ChatService({
    name: '管理人',
    text: `ようこそ、${state.name}さん`,
    action: 'SEND_MESSAGE',
  })
  const scrollBottomRef = useRef<HTMLDivElement>(null)
  const [text, setText] = useState('')
  useEffect(() => {
    console.log('dispatch')
    if (otherMoney) play2()
  }, [otherMoney])

  const submitMessage = () => {
    if (text.length === 0) return
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sendMessage({ text: text, name: state.name, action: 'SEND_MESSAGE' })
    setText('')
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleInputChange = (e) => {
    setText(e.target.value)
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleButtonClick = () => {
    submitMessage()
  }
  const handleMoneyClick = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sendMessage({ text: 'money', name: 'money', action: KEY_SEND_MONEY })
    play()
    setText('')
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleOnKeydown = (event) => {
    if (event.keyCode == 13) {
      submitMessage()
    }
  }
  useLayoutEffect(() => {
    if (scrollBottomRef && scrollBottomRef.current) {
      scrollBottomRef?.current?.scrollIntoView()
    }
  })
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    <div
      style={style.body}
      className={'d-flex flex-column justify-content-between'}
    >
      {money ? <Money></Money> : <></>}
      <div className={'overflow-scroll mh-100'} style={style.listBox}>
        <ul>
          {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            messages.map((msg: ChatProps, idx: number) => {
              return (
                <Message
                  key={idx}
                  name={msg.name}
                  message={msg.text}
                  emotions={msg.emotions}
                />
              )
            })
          }
          <div ref={scrollBottomRef}></div>
        </ul>
      </div>
      <div>
        <div className={'input-group mb-3'}>
          <input
            type="text"
            placeholder="メッセージ"
            value={text}
            className={'form-control'}
            onChange={handleInputChange}
            onKeyDown={handleOnKeydown}
          />
          <button disabled={!text} onClick={handleButtonClick}>
            送信
          </button>
        </div>
        <button
          className={'btn btn-lg btn-warning w-100'}
          onClick={handleMoneyClick}
        >
          投げ銭
        </button>
      </div>
    </div>
  )
}

const style = {
  body: {
    height: '700px',
  },
  listBox: {},
}
