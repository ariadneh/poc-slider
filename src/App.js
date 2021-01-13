import { useState } from 'react'
import './App.css'

const App = () => {
  const [minRange, setMinRange] = useState(0)
  const [maxRange, setMaxRange] = useState(5000)
  const handleMinRange = (e) => {
    setMinRange(e.target.value)
  }
  const handleMaxRange = (e) => {
    setMaxRange(e.target.value)
  }
  const showValues = () => {
    if (maxRange < minRange) {
      return (
        <>
          R$ {maxRange}
          R$ {minRange}
        </>
      )
    }

    return (
      <>
        R$ {minRange}
        R$ {maxRange}
      </>
    )
  }
  return (
    <>
      <input type='range' name='slider' id='slider' min='100' max='5000' step='100' onChange={handleMinRange} value={minRange} />
      <input type='range' name='slider' id='slider' min='100' max='5000' value={maxRange} step='100' onChange={handleMaxRange} />
      {showValues()}
      <span style={{ width: '100%', position: 'absolute' }} />
    </>
  )
}

export default App
