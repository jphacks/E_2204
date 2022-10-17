import AmazonIVSPlayer from '@/components/AmazonIVSPlayer'

const Player = () => {
  return (
    <div
      className={'w-75 d-flex align-items-center justify-content-center'}
      style={style.body}
    >
      <AmazonIVSPlayer />
    </div>
  )
}

const style = {
  title: {
    color: 'black',
  },
  body: {
    backgroundColor: '#0a0a0a',
  },
}

export default Player
