import React from 'react'
const Filter = ({searchTerm}) => {
return(
        <>
        <p>Filter entries:</p> <input onChange={searchTerm}/>
        </>
    )
}

export default Filter 