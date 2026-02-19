import { useState } from 'react';
import  {  v4  as  uuidv4  }  from  'uuid' ;
import { Container, ToDoList } from './styles';



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
      <input onChange={inputMudou} placeholder='Digite o que vai fazer....' />
      <button onClick={clickBotao}>Adicionar</button>

      <ul>

        {list.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}

      </ul>
      </ToDoList>
    </Container>




  )
}

export default App
