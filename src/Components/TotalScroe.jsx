import React from 'react'
import styled from "styled-components"
const TotalScroe = ({scroe}) => {
  return (
    <ScoreComponents>
            <h1>{scroe}</h1>
            <p>Total Scroe</p>
        </ScoreComponents>
  )
}

export default TotalScroe;

const ScoreComponents =styled.div`
max-width:200px;
align-items:center;
h1{
    font-size:100px;
    line-height:100px;
}
p{
    font-size:24px;
    font-weight:500;
}



`;