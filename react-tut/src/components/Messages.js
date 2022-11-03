import React, { useState } from 'react'

function Messages() {
    const [Messages, setMessages] = useState(['a', 'b'])
    function handleClick(id){
        setMessages(prevMessages => prevMessages.splice(id-1 , 1))
    }
    
  return (
    <>
    <p>you have {Messages.length === 0 ? "no messages your all caught up!": Messages.length} {Messages.length > 1 ? "messages": Messages.length === 1 ? "message": ""}</p>
    {Messages.map( message=> <><p key={Messages.indexOf(message)+ "para"}>{message}</p> <button key={Messages.indexOf(message) + 'button'} onClick={()=>handleClick(Messages.indexOf(message))}>Mark as read</button></>)}
    </>
  )
}

export default Messages