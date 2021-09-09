import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.courseName}</h1>
    </>
  )
}

const Parts = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

const Content = (props) => {

  console.log(props);

  return (
    <>
      <Parts part={props.part1} exercises={props.exercises1} />
      <Parts part={props.part2} exercises={props.exercises2} />
      <Parts part={props.part3} exercises={props.exercises3} />
    </>
  )
}

const Total = (props) => {

  console.log(props);

  return (
    <>
      {props.exercises1 + props.exercises2 + props.exercises3}
    </>
  )
}
 
const App = () => {

  
  const course = 'Half Stack Application development';
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component'];
  const exercises = [10, 7, 14];
  
  return (
    <>
      <Header courseName={course}/>
      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]} />
      <Total exercises1={exercises[0]} exercises2={exercises[1]} exercises3={exercises[2]} />
    </>
  )
}

export default App