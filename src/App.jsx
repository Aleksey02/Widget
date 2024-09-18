import './App.scss'
import Aside from './Components/Aside/Aside.jsx'
import Main from './Components/Main/Main.jsx'
import { useState } from 'react'
import {data, table} from './data.js'

function App() {
  
  const [activeItem, setActiveItem] = useState(data[0])
  return (
    <div className='app'>
      <Aside data={data} activeItem={activeItem} setActiveItem={setActiveItem}/>
      <Main table={table} activeItem={activeItem}/>
    </div>
  )
}

export default App
