import { useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormD from './FormD'
import Getformdata from './Getformdata'
function App() {
  const handleChange = (event) => {
  };


  return (
    <>
    <FormD handleChange={handleChange}/>
  <Getformdata/>
 </>
  )
}

export default App
