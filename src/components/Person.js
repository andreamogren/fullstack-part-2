import React from 'react'

const Person = (props) => {
    return(
        <>
        <p id={props.id}>{props.name} {props.number}</p>
        <button onClick={props.delete}>Delete</button>
        </>
    )
}

export default Person