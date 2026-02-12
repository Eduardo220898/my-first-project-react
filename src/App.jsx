import { useState } from 'react';
import  {  v4  as  uuidv4  }  from  'uuid' ;


function App() {

  const [list, setList] = useState([{id: uuidv4(), text: 'estudar react'}, {id: uuidv4(), text: 'estudar node'}]);  
  

  function inputMudou(event) {
    console.log(event.target.value)
  }

  function clickBotao() {
    console.log('Clicou no botão')
  }
  return (
    <div>
      <input onChange={inputMudou} placeholder='Digite o que vai fazer....' />
      <button onClick={clickBotao}>Adicionar</button>

      <ul>

        {list.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}

      </ul>
    </div>




  )
}

export default App
