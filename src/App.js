import React from 'react'
import Course from './components/Course'

const App = ({courses}) => {
  const renderCourses = () => courses.map(course => {
      return(
          <Course key={course.id} course={course}/>
      )
  })
  return (
    <>
      {renderCourses()}
    </>
  )
}

  export default App

  //testing testing