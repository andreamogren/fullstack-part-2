import React from 'react'

const Person = (props) => {
    return(
        <>
        <p>{props.name} {props.number}</p>
        <button id={props.id} onClick={props.delete}>Delete</button>
        </>
    )
}

export default Person