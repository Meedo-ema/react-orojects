import { styled, keyframes } from "styled-components"
import Mohamed from './mohamed.png'

const animationContainer = keyframes`
0%{
  transform: rotate(0deg);
}
25%{
  transform: rotate(45deg);
}
50%{
  transform: rotate(90deg);
}
75%{
  transform: rotate(180deg);
}
100%{
}
`

export const LoginContainer = styled.div`

margin : auto;
dispaly: flex;
flex-direction: column;
&.animate{
  animation: ${animationContainer} 1s linear;
    transform: rotate(180deg) translateY(400px);
  transition: 1s linear;
  
}
`;

const animationLogo = keyframes`
0%{
  border-radius: 0 0 0 0;
  transform: rotate(0deg);
}
25%{
  border-radius: 25%;
  transform: rotate(45deg);
}
50%{
  border-radius: 50%;
  transform: rotate(90deg);
}
75%{
  border-radius: 75%;
  transform: rotate(180deg);
}
100%{
  transform: scale(0)
}
`

export const FormAnimation = styled.div`
width: 250px;
height: 250px;
background: ${(props) => props.background || `url(${Mohamed}) center/cover`};
margin: 0 auto;
text-align: center;
display: flex;
flex-direction: column;
margin-top: 75px;
border: 10px solid ${(props) => props.borderColor || '#333'};
border-radius: 5px;
box-shadow: 15px 15px 15px rgba(0,0,0,.2);
&.animate{
  animation: ${animationLogo} 1s linear;
    transform: rotate(180deg);
  border-radius: 50%;
  transition: 1s linear;
  transform: scale(0);
  
}
`

