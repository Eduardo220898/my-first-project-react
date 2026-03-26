import { useState } from 'react';
import  {  v4  as  uuidv4  }  from  'uuid' ;
import { Container, ToDoList, Input, Button, ListItem } from './styles';
import { FcCheckmark, FcEmptyTrash } from "react-icons/fc";



function App() {

  const [list, setList] = useState([{id: uuidv4(), task: 'estudar react', finished: true}, {id: uuidv4(), task: 'estudar node'}]);  
   const [imputTask, setImputTask] =useState('');

  

  function inputMudou(event) {
    setImputTask(event.target.value)
  }

  function clickBotao() {
   setList([...list, {id: uuidv4(), task: imputTask, finished: false}])
   
  }
  return (
    <Container>
      <ToDoList>
      <Input onChange={inputMudou} placeholder='Digite o que vai fazer....' />
      <Button onClick={clickBotao}>Adicionar</Button>

      <ul>

        {list.map(item => (
          <ListItem isFinished={item.finished} key={item.id} >
           <FcCheckmark />
          <li >{item.task}</li>
          <FcEmptyTrash />
          </ListItem>
        ))}

      </ul>
      </ToDoList>
    </Container>




  )
}

export default App
