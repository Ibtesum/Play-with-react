import React, { useState, useEffect } from 'react'

function Clock({locale}) {
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date())
    }

    useEffect(() => {
      const timerID = setInterval(refreshClock,1000)
      return () => clearInterval(timerID)
    }, []);
    
    
    return (
        <h1>
            <span>{date.toLocaleTimeString(locale)}</span>
        </h1>
    )
}

export default Clock