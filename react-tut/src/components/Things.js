import React, { useState} from 'react'

function Things() {
    const [things, setThings] = useState(['thing 1', 'thing 2'])
    const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)
    const handleClick = ()=>{
        setThings(prevState => [...prevState, `thing ${things.length +1}`])
        console.log(things)
        
    }
    function greeting(name){
        const date = new Date();
        const hours = date.getHours()
        let timeOfDay;
        if(hours >= 20 || hours < 4){
            timeOfDay = 'night'
        }else if(hours >= 4 && hours < 12){
            timeOfDay = 'morning'
        } else if (hours < 17){
            timeOfDay = 'afternoon'
        }else if(hours < 20){
            timeOfDay = 'evening'
        }
        return `hello and good ${timeOfDay} ${name}`
    }
    console.log(greeting("bob"))


  return (
    <> 
    <button onClick={handleClick
    }>Try Me!</button>
    {thingsElements}

    </>
    
  )
}

export default Things