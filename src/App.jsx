import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container, ToDoList, Input, Button, ListItem, CheckIcon, DeleteIcon } from './styles';




function App() {

  const [list, setList] = useState([]);
  const [imputTask, setImputTask] = useState('');



  function inputMudou(event) {
    setImputTask(event.target.value)
  }

  function clickBotao() {
    if (imputTask){
       setList([...list, { id: uuidv4(), task: imputTask, finished: false }])
    }

  }

  function finalizarTarefa(id) {
    const newlist = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))
    setList(newlist)
  }

  function deletarTarefa(id) {
    const newList = list.filter(item => item.id !== id)
    setList(newList)

  }
  return (
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} placeholder='Digite o que vai fazer....' />
        <Button onClick={clickBotao}>Adicionar</Button>

        <ul>

          {
            list.length > 0 ? (
              list.map(item => (
                <ListItem isFinished={item.finished} key={item.id} >
                  <CheckIcon onClick={() => finalizarTarefa(item.id)} />
                  <li >{item.task}</li>
                  <DeleteIcon onClick={() => deletarTarefa(item.id)} />
                </ListItem>
              ))
            ) : (
              <h3>Bora Organizar Seu Dia 🚀</h3>
            )}

        </ul>
      </ToDoList>
    </Container>




  )
}

export default App
