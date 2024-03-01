import React, { useState } from 'react'
import TotalScroe from './TotalScroe'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {

    const [selectedNumber, SetSelectedNumber] = useState();
    const[currentDice, setCurrentDice]=useState(1);
    const[scroe, setScroe]=useState(0);
    const[error, setError]=useState("");
    const[showRules, setShowRules]=useState(false);


    const generateRandomNumber=(min, max) => {
        console.log(Math.floor(Math.random() * (max-min)+min))
        return Math.floor(Math.random() * (max-min)+min);
    }
    
    
    const roleDice= () =>{
        if(!selectedNumber) {
            setError("You have not selected any number")
            return;
        }
        setError("")

        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev) => randomNumber)


        

        if (selectedNumber == randomNumber){
            setScroe((prev) => prev +randomNumber );
        } else {
            setScroe((prev) => prev -2);
        }

        SetSelectedNumber(undefined)
    }
    

    const resetScore=() =>{
        setScroe(0)
    };


  return (
    <MainContainer>
        <div className='top_section'>
        <TotalScroe scroe={scroe}/>
        <NumberSelector
        setError={setError}
         error={error} SetSelectedNumber={SetSelectedNumber} selectedNumber={selectedNumber}/>
        </div>
        <RoleDice  currentDice={currentDice} roleDice={roleDice}/>

<div className='btns'>
    <OutlineButton onClick={resetScore}>Reset</OutlineButton>
    <Button 
    onClick={() =>setShowRules((prev) => !prev)}
    >{showRules? "Hide" :"Show"} Rules</Button>

</div>
       {showRules && <Rules/>}

    </MainContainer>
  )
}

export default GamePlay;

const MainContainer=styled.main`
padding-top:70px;
.top_section
{
    width:1080px;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    align-items:end;
}
.btns{
    display:flex;
    flex-direction:column;
    justify-content:center;
   gap:10px;
    align-items:center;
    margin-top:40px;
}
`;