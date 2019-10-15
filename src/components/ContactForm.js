import React from 'react'

const ContactForm = ({name, number, changeName, changeNumber, clickHandler}) => {
    return(
        <>
        <form>
            <div>
            name: <input value={name} onChange={changeName}/>
            <br/>
            phone: <input value={number} onChange={changeNumber}/>
            </div>
            <div>
            <button type="submit" onClick={clickHandler}>add</button>
            </div>
        </form>
        </>
    )
} 

export default ContactForm