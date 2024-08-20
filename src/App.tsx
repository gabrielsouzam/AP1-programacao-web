import './index.css'
import { Questao01A } from './questoes/Questao01'
import { Questao02 } from './questoes/Questao02'
import { Questao03 } from './questoes/Questao03'
import { Questao04 } from './questoes/Questao04'

export function App() {

  return (
    <div className='px-10 py-5'>
      <h1>Q1</h1>

      <Questao01A />

      <h1>Q2</h1>

      <Questao02 />

      <h1>Q3</h1>

      <Questao03 />

      <h1>Q4</h1>

      <Questao04 />
    </div>
  )
}

