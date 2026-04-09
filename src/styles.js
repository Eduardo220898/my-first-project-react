import styled from "styled-components"; 'styled-components';
import { FcCheckmark, FcEmptyTrash } from "react-icons/fc";

export const Container = styled.div`

background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;




`

export const ToDoList = styled.div`

background: green;
border-radius: 5px;
padding:30px 20px;


ul{
    padding: 0;
    margin-top: 40px;
}
`
export const Input = styled.input`

border-radius: 5px;
border: none;
padding: 10px 15px;
margin-right: 10px;
width: 300px;
margin-right: 35px;


`

export const Button = styled.button`

border-radius: 5px;
border: none;
padding: 10px 15px;
background: #FF8C00;
color: white;
cursor: pointer;
width: 100px;


`
export const ListItem = styled.div`
background:${(props) => (props.isFinished ? '#90EE90' : '#ffffff')};
border-radius: 5px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
height: 60px;
display: flex;
 align-items: center;
justify-content: space-between;
margin-bottom: 25px;
padding: 0 10px;
width: 450px;




li{
list-style: none;
}
`
export const CheckIcon = styled(FcCheckmark)`
cursor: pointer;
`
export const DeleteIcon = styled(FcEmptyTrash)`
cursor: pointer;
`
