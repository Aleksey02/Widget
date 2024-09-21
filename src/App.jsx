import './App.scss'
import Aside from './Components/Aside/Aside.jsx'
import Main from './Components/Main/Main.jsx'

function App({table}) {
  
  return (
    <div className='app'>
      <Aside />
      <Main table={table} />
    </div>
  )
}

export default App
