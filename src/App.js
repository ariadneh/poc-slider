import { useState } from 'react'
import './App.css'

const App = () => {
  // const [minRange, setMinRange] = useState(0)
  // const [maxRange, setMaxRange] = useState(5000)

  const [range, setRange] = useState([0, 5000])
  const [iMin, iMax] = [0, 5000]
  const [min, max] = range

  const handleRange = (e) => {
    const { value } = e.target
    const tAndrera = (value - iMin > iMax - value)

    if ((value >= max) || (value >= min && value <= max && !tAndrera)) {
      setRange([min, value])
    } else if ((value <= min) || (value >= min && value <= max && tAndrera)) {
      setRange([value, max])
    }
  }

  const showValues = () => {
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
      <input type='range' name='minrange' id='slider' min={iMin} max={iMax} defaultValue={iMin} step='100' onChange={handleRange} />
      <input type='range' name='maxrange' id='slider-max' min={iMin} max={iMax} defaultValue={iMax} step='100' onChange={handleRange} />
      {showValues()}
      <span style={{ width: '100%', position: 'absolute' }} />
    </>
  )
}

export default App
