import { useState } from 'react'
import './App.css'
import FunctionalComponent from './component/functionalComponent.jsx'
import GreetClass from './component/GreetClass.jsx'
import StudentCom from './component/studentCom.jsx'

function App() {
  return (
    <div>
     <FunctionalComponent name="Suleka" />
     <GreetClass name="Suleka" />
     <StudentCom />
    </div>
  )
}

export default App