import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Createsign } from './components/Createsign'
import { Signups } from './components/signups'
function App() {
  const [signups,setSignups] =useState([])


  fetch("http://localhost:3000/signups")
    .then(async function(res){
      const json = await res.json();
      setSignups(json.signups)
  })


  return (
    <div>
      <Createsign/>
      <br />
      <Signups signups={signups}></Signups>
    </div>
  )
}


export default App
