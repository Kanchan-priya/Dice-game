import { useState } from 'react'
import './App.css'
import StartGame from './Components/StartGame'
import GamePlay from './Components/GamePlay';

function App() {
  
const[isGameStarted, setIsGameStarted]=useState(false);

const toggleGamePlay=()=>{
  setIsGameStarted((prev)=>!prev)
}

  return (
    <>
{
isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>


}
{/* <StartGame/> */}

</>
  );
}

export default App
