import { useState } from 'react'
import './App.css'

const App = () => {
  const [iMin, iMax] = [0, 5000]
  const [range, setRange] = useState([0, 5000])
  const [firstValue, secondValue] = range

  const showValues = () => {
    const [min, max] = range.sort((a, b) => a - b)
    return (
      <>
        <label htmlFor='minrange'>
          R$ {min}
        </label>
        <label htmlFor='maxrange'>
          R$ {max}
        </label>
      </>
    )
  }
  return (
    <>
      <input type='range' name='minrange' id='input1' min={iMin} max={iMax} defaultValue={iMin} step='100' value={firstValue} onChange={(e) => setRange([e.target.value, secondValue])} />
      <input type='range' name='maxrange' id='input2' min={iMin} max={iMax} defaultValue={iMax} step='100' value={secondValue} onChange={(e) => setRange([firstValue, e.target.value])} />
      {showValues()}
      <span style={{ width: '100%', position: 'absolute' }} />
    </>
  )
}

export default App
