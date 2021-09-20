import React, { useState } from 'react'

const Display = ({ counter }) => <div>{counter}</div>


const Buttons = ({ onClick,text }) => <button onClick={ onClick }> { text }</button>


const App = () => {
  const [ counter, setCounter ] = useState(0)

  
  const timeErase = () => setCounter(counter+ 1);
  const bitesTheDust = () => setCounter(counter - 1);
  const returnToZero = () =>  setCounter(0);


  return (
    <>
      <Display counter={counter}/>
      <Buttons
    
      onClick={timeErase}
      text='Plus'

      />

      <Buttons

      onClick={returnToZero}
      text='RTZ'

      />

      <Buttons 
      
      onClick={bitesTheDust}
      text="Minus"
      
      />
    </>
  )
}

export default App