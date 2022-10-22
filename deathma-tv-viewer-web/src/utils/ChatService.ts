import { useEffect, useRef, useState } from 'react'
import { KEY_SEND_MONEY, randomStr } from '@/utils/constants'

interface Props {
  name: string
  text: string
  action: string
}

export const ChatService = (props: Props) => {
  const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'ws://localhost:8080'
  const [messages, setMessages] = useState([props])
  const [money, setMoney] = useState(false)
  const [otherMoney, setOtherMoney] = useState(false)
  const socketRef = useRef(null)
  const [isPaused, setPause] = useState(false)
  const updateOtherMoney = () => {
    setOtherMoney((otherMoney) => {
      return !otherMoney
    })
    return true
  }
  useEffect(() => {
    console.log('Connectinng..')
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    socketRef.current = new WebSocket(SOCKET_URL + '/rooms/hoge')
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    socketRef.current.onopen = () => console.log('socketRef opened')
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    socketRef.current.onclose = () => console.log('socketRef closed')

    const socketRefCurrent = socketRef.current

    return () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      socketRefCurrent.close()
    }
  }, [])
  useEffect(() => {
    if (!socketRef.current) return

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    socketRef.current.onmessage = (e) => {
      if (isPaused) return
      console.log(e.data)
      const message = JSON.parse(e.data)
      if (message.action === KEY_SEND_MONEY) {
        if (message.id && message.id !== randomStr) {
          updateOtherMoney()
        }
        setMoney(true)
      } else {
        setMoney(false)
        setMessages((prevMessages) => [...prevMessages, message])
      }
      console.log('e', message)
    }
  }, [isPaused])

  const sendMessage = (props: Props) => {
    const aMessage = {
      name: props.name,
      text: props.text,
      action: props.action,
      id: randomStr,
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    socketRef.current.send(JSON.stringify(aMessage))
    // setMessages((prevMessages) => [...prevMessages, aMessage])
  }

  return [messages, sendMessage, money, otherMoney]
}
