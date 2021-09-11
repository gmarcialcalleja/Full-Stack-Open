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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  
  return (
    <>
      <Header courseName={course}/>
      <Content part1={parts[0].name} part2={parts[1].name} part3={parts[2].name} />
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
    </>
  )
}

export default App