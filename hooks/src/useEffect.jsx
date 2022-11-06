import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Count(){
    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title = `Você clicou ${count} vezes`
    }, [count])

    return (
        <>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>Incremento</button>
        </>
    )
}

root.render(<Count/>)