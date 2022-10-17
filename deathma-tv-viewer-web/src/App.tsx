import Stream from '@/views/stream'
import './App.css'
import backStyle from './App.module.css'

function App() {
  console.log('app')

  return (
    <div className={'App'}>
      <div className={backStyle.back}>
        <Stream />
      </div>
    </div>
  )
}

export default App
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
  back: {
    backgroundImage: `url(`,
  },
}
