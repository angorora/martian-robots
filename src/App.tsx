import { useState } from 'react'
import './App.css'
import { handleCommands } from './services/commandHandler'

function App() {
  const [commands, setInput] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }
  const splitInput = ()=> commands.split('\n').map(cmd => cmd.trim()).filter(cmd => cmd.length > 0);
  const startEvaluation = () => {
    const bounds = splitInput()[0].split(' ').map(Number);
    const commandsToEvaluate = splitInput().slice(1);
    handleCommands([bounds[0], bounds[1]], commandsToEvaluate);
  }

  return (
    <>
      <h1>Command Entry</h1>
      <div className="card">
        <section>
          <textarea  rows={15} cols={50} name="command-center" value={commands} onChange={handleChange} id="commands">
          </textarea>
        </section>
        <button onClick={() => startEvaluation()}>
          Evaluate Input
        </button>
      </div>
    </>
  )
}

export default App
