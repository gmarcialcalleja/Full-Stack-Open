import React from "react"
import Header from "./Header"
import Sum from "./Sum"

const Course = ({course}) => {
    
    return (
      <div>
        <Header course={course}/>
        <div>
          {course.parts.map((eachCourse,i) => 
            <p key={i}>
                {eachCourse.name} {eachCourse.exercises}
            </p>
          )}

          <Sum course={course}/>
        </div>
        
      </div>
    )
}

  
   
  

export default Course