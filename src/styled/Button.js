import styled from "styled-components";


export const Button =styled.button`
color:#fff;
padding:10px 18px;
width:220px;
background-color:#000;
border-radius:5px;
border:1px solid transparent;
font-size:16px;
cursor:pointer;
transition:0.s4 background ease-in;

&:hover{
  background-color:#FFF;
  border:1px solid black;
color:#000;
transition:0.3s background ease-in;
}
`;

export const OutlineButton =styled(Button)`
color:#000;
background-color:#fff;
border:1px solid #000;


&:hover{
  background-color:#000;
  border:1px solid transparent;
color:#fff;

}
`;