import React, { useState, useEffect } from 'react';
import './Time.css';

function Time() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    let greeting = "Howdy";
    
    if(time.getHours() < 12 ){
        greeting = "Good morning"
    } else if (time.getHours() < 18){
        greeting = "Good afternoon"
    }
    else{
        greeting = "Good night";
    }

  return (
    <div className='time-wrapper'>
        <h2 className=''>{greeting}</h2>
        <p>Current time is: </p>
        <p>{time.toLocaleTimeString()}</p>
    </div>
  )
}

export default Time
