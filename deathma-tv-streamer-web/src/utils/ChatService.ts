import { useEffect, useRef, useState } from 'react'

interface Props {
  name: string
  text: string
}

export const ChatService = (props: Props) => {
  const SOCKET_URL =
    import.meta.env.VITE_SOCKET_URL || 'ws://localhost:8080/rooms/hoge'

  const [messages, setMessages] = useState([props])
  const socketRef = useRef(null)
  // const socketRef = useRef()
  const [isPaused, setPause] = useState(false)
  useEffect(() => {
    console.log('Connectinng..')
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    socketRef.current = new WebSocket(SOCKET_URL)
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

      setMessages((prevMessages) => [...prevMessages, message])

      console.log('e', message)
    }
  }, [isPaused])

  const sendMessage = (props: Props) => {
    const aMessage = {
      name: props.name,
      text: props.text,
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    socketRef.current.send(JSON.stringify(aMessage))
    // setMessages((prevMessages) => [...prevMessages, aMessage])
  }

  return [messages, sendMessage]
}
