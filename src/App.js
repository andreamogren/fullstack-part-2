import React from 'react'
import Course from './components/Course'

const App = ({course}) => {
    console.log("App: ", course)
    return (
      <div>
        <Course course={course}/>
      </div>
    )
  }

  export default App

  