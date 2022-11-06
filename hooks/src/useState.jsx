import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Count(){
    const [count, setCount] = useState(0)

    return (
        <>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>Incremento</button>
        </>
    )
}

root.render(<Count/>)