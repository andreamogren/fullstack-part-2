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
    const courseList = () => course.parts.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises}/>
    )
    return(
    <div>
        <Header course={course}/>
        {courseList()}
    </div>
    )
}

const Course = ({course}) => {
    return(
        <Content course={course}/>
    )
}

export default Course