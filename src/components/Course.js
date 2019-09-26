import React from 'react'

const Header = ({course}) => {
    return(
        <div><h1>{course.name}</h1></div>
    )
}

const Part = (props) => {
    return(
        <div>
            <p>{props.name}: {props.exercises}</p>
        </div>
    )
}

const Content = ({course}) => {
        const exercises = []
        const courseList = () => course.parts.map(part => {
                exercises.push(part.exercises)
                return <Part key={part.id} name={part.name} exercises={part.exercises}/>
            }
        )
        const totalSum = () => exercises.reduce((sum, exercise) => {
                return sum + exercise 
            }
        ) 
    return(
    <div>
        {courseList()}
        <p><b>Total: {totalSum()}</b></p>
    </div>
    )
}

const Course = ({courses}) => {
    const renderCourses = () => courses.map(course => {
        return(
            <div>
                <Header key={course.id} course={course}/>
                <Content key={course.id} course={course}/>
            </div>
        )
    })
    return(
        <div>
            {renderCourses()}
        </div>
    )
}

export default Course