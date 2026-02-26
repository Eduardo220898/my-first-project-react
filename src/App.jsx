import { useState } from 'react';
import  {  v4  as  uuidv4  }  from  'uuid' ;
import { Container, ToDoList, Input, Button  } from './styles';
import { FcCheckmark, FcEmptyTrash } from "react-icons/fc";



function App() {

  const [list, setList] = useState([{id: uuidv4(), text: 'estudar react'}, {id: uuidv4(), text: 'estudar node'}]);  
   const [imputTask, setImputTask] =useState('');

  

  function inputMudou(event) {
    setImputTask(event.target.value)
  }

  function clickBotao() {
   setList([...list, {id: uuidv4(), text: imputTask}])
   
  }
  return (
    <Container>
      <ToDoList>
      <Input onChange={inputMudou} placeholder='Digite o que vai fazer....' />
      <Button onClick={clickBotao}>Adicionar</Button>

      <ul>

        {list.map(item => (
          <div>
           <FcCheckmark />
          <li key={item.id}>{item.text}</li>
          <FcEmptyTrash />
          </div>
        ))}

      </ul>
      </ToDoList>
    </Container>




  )
}

export default App
