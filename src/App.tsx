import { Outlet } from 'react-router'
import './App.css'

function App() {
  return (
    <div className='h-screen bg-gray-400 flex items-center justify-center mx-auto w-full'>
      <div className="w-[375px] bg-whiteshadow-lg rounded-lg h-full">
        <Outlet />
      </div>
    </div>
  )
}

export default App
