import React, { useState} from 'react'

function Things() {
    const [things, setThings] = useState(['thing 1', 'thing 2'])
    const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)
    const handleClick = ()=>{
        setThings(prevState => [...prevState, `thing ${things.length +1}`])
        console.log(things)
        
    }
    


  return (
    <> 
    <button onClick={handleClick
    }>Try Me!</button>
    {thingsElements}

    </>
    
  )
}

export default Things