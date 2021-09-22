import React, { useState } from 'react'

const Statistics = (props) => {
  return (
    <div>{props.text} {props.feedbackNumber}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={ props.feedback }> {props.text} </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedback = (type) => {
    return () => {
      if (type === 'good') {
        setGood(good + 1);
      } else if (type === 'neutral') {
        setNeutral(neutral + 1);
      } else if (type === 'bad') {
        setBad(bad + 1);
      } else {
        console.log(type)
      }
    }
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button feedback={feedback('good')} text={'good'} />
      <Button feedback={feedback('neutral')} text={'neutral'} />
      <Button feedback={feedback('bad')} text={'bad'} />

      <h1>Statistics</h1>
      <Statistics text="good"  feedbackNumber={good} />
      <Statistics text="neutral"  feedbackNumber={neutral} />
      <Statistics text="bad"  feedbackNumber={bad} />

    </div>
  )
}

export default App