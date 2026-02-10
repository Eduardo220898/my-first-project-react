

function App() {

  function inputMudou(event) {
    console.log(event.target.value)
  }

  function clickBotao() {
    console.log('Clicou no botão')
  }
  return (
    <div>
      <input onChange={inputMudou} placeholder='Digite o que vai fazer....'/>
      <button onClick={clickBotao}>Adicionar</button>

      <ul>

        <li>Estudar React</li>
        <li>Estudar JS</li>
        <li>Estudar Inglês</li>

      </ul>
    </div>




  )
}

export default App
