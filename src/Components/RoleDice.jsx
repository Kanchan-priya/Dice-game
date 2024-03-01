import React, { useState } from 'react'
import styled from 'styled-components'

const RoleDice = ({currentDice, roleDice}) => {










  return (
    <DiceContainer>
<div className='dice' onClick={roleDice}>
    <img src={`/images/dice/dice_${currentDice}.png`} alt='dice1'/>
    </div>
    <p>Click on Dice to roll</p>


    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer= styled.div`
.dice{
    cursor:pointer;
}
display:flex;
align-items:center;
flex-direction:column;
margin-top:48px;

p{
    font-size:24px;
}

`;