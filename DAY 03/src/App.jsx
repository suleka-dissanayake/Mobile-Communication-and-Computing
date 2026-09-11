import { useState } from 'react'
import './App.css'
import FunctionalComponent from './component/FunctionalComponent.jsx'
import GreetClass from './component/GreetClass.jsx'
import StudentCom from './component/StudentCom.jsx'

function App() {
  return (
    <div>
      <FunctionalComponent name="Suleka" />
      <GreetClass name="Suleka" />
      <StudentCom name="Suleka" course="MCC" />
      <StudentCom name="Arun" course="KBS" />
      <StudentCom name="Nethsara" course="DIP" />
    </div>
  )
}

export default App