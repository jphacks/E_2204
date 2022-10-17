import { useLayoutEffect, useRef, useState } from 'react'
import { Message } from '@/components/Message'
import { ChatService } from '@/utils'

interface Props {
  name: string
  text: string
}

const initState: Props = { name: '', text: '' }

export const Chat = (state: Props = initState) => {
  const [messages, sendMessage] = ChatService({
    name: '管理人',
    text: `ようこそ、${state.name}さん`,
  })
  const scrollBottomRef = useRef<HTMLDivElement>(null)
  const [text, setText] = useState('')

  const submitMessage = () => {
    if (text.length === 0) return
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sendMessage({ text: text, name: state.name })
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
      <div className={'overflow-scroll mh-100'} style={style.listBox}>
        <ul>
          {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            messages.map((msg: Props, idx: number) => {
              return <Message key={idx} name={msg.name} message={msg.text} />
            })
          }
          <div ref={scrollBottomRef}></div>
        </ul>
      </div>
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
    </div>
  )
}

const style = {
  body: {
    height: '700px',
  },
  listBox: {},
}
