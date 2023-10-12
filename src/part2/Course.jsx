import React from 'react'

const Course = (props) => {
  return (
    <div>
    <Header course={props.course.name} />
    <Content part={props.course.parts}/>
    <Total part={props.course.exercises}/>
  </div>
  )
}

export default Course

const Header = (props) => {

  return (
    <div>
        <h1>{props.course}</h1>
    </div>
  )
  }
  const Parts = (props) => {
    return (
      <div>
          <p>{props.part} {props.exercises}</p>
      </div>
    )
    }
    const Total = (props) => {
      
           const total =  part.reduce((a, b) => {
            return { exercises: a.exercises + b.exercises }
        });
        return (
        <div>
            <h1>Number of Exercises {total}</h1>
        </div>
      )
      }
    const Content = (props) => {  
      return (
        <div>
          <Parts part={props.part[0].name} exercises={props.part[0].exercises}/>
          <Parts part={props.part[1].name} exercises={props.part[1].exercises}/>
          <Parts part={props.part[2].name} exercises={props.part[2].exercises}/>
          <Parts part={props.part[3].name} exercises={props.part[3].exercises}/>

        </div>
      )
    }