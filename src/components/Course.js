import React from 'react'

const Header = ({course}) => {
    return(
        <><h1>{course.name}</h1></>
    )
}

const Part = (props) => {
    return(
        <>
            <p>{props.name}: {props.exercises}</p>
        </>
    )
}

const Content = ({course}) => {
        const exercises = []
        const courseList = () => course.parts.map((part, index) => {
                exercises.push(part.exercises)
                return <Part key={part.id} name={part.name} exercises={part.exercises}/>
            }
        )
        const totalSum = () => exercises.reduce((sum, exercise) => {
                return sum + exercise 
            }
        ) 
    return(
    <>
        {courseList()}
        <p><b>Total: {totalSum()}</b></p>
    </>
    )
}

const Course = ({course}) => {
    return(
        <div>
            <Header course={course}/>
            <Content course={course}/>
        </div>
    )
}

export default Course