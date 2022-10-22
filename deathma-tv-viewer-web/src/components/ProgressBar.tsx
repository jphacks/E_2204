import axios from 'axios'
import { useEffect, useState } from 'react'

const proggressApi = '/progress'

interface Progress {
  count: number
  open_cnt: number
  progress: number
}

const intervalMs = 60000

export const ProgressBar = () => {
  const DEATH_API_URL =
    import.meta.env.VITE_DEATH_API_URL || 'http://localhost:8080'

  const instance = axios.create({
    baseURL: DEATH_API_URL,
  })
  const [count, setCount] = useState(0)
  const [progress, setProgress] = useState({
    count: 0,
    open_cnt: 0,
    progress: 0,
  })
  useEffect(() => {
    instance
      .get(proggressApi)
      .then((response) => {
        console.log('get progress')
        console.log(JSON.parse(response.data))
        setProgress(JSON.parse(response.data))
      })
      .catch(() => {
        console.log('通信に失敗しました')
      })
  }, [])
  useEffect(() => {
    const intervalId = setInterval(() => {
      instance
        .get(proggressApi)
        .then((response) => {
          setProgress(JSON.parse(response.data))
          setCount(count + 1)

          console.log(count + ' ' + response.data)
        })
        .catch(() => {
          console.log('通信に失敗しました')
        })
    }, intervalMs)

    return () => {
      clearInterval(intervalId)
    }
  }, [progress])

  return (
    <div>
      <p style={style.header}>配信者の進捗</p>
      <progress
        id="issue_progress"
        max="1"
        value={progress.progress}
        className={'w-100'}
        style={style.bar}
      ></progress>
    </div>
  )
}
const style = {
  bar: {
    height: '30px',
  },
  header: {
    marginBottom: '0',
  },
}
