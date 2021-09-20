import React, { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0 ) {
    return (
      <div>Press the damn button idiot</div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClicks}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([]);

  const handleClicks = {
    plus: {
      left: () => {
        setAll(allClicks.concat('L'));
        setLeft(left + 1);
      },
      right: () => {
        setAll(allClicks.concat('R'));
        setRight(right + 1);
      }
    },

    minus: {
      left: () => {
        setAll(allClicks.concat('-L'));
        setLeft(left - 1);
      },
      right: () => {
        setAll(allClicks.concat('-R'));
        setRight(right - 1);
      }
    }

  }/*
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  }*/

  return (
    <div>
      {left}{/*
      <button onClick={handleClicks.plus.left}>left</button>
      <button onClick={handleClicks.plus.right}>right</button>*/}
      <Button 
      handleClicks={handleClicks.plus.left}
      text="left"
      />
      <Button
      handleClicks={handleClicks.plus.right}
      text="right"
      />
      {right}
      <History allClicks={allClicks}/>
    </div>
  )
}

export default App