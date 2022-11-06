import react, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

function useVariavel(){
    const [names, setState] = useState([
        'Kelvyn', 'Sara', 'Ísis'
    ])
    let input = ''

    function addUser(){
        setState([...names, input])
    }

    function handleInput(event){
        input = event.nativeEvent.target.value
    }

    return [names, addUser, handleInput]
}

function ListNames(){
    const [names, addUser, handleInput] = useVariavel()

    return (
        <>
            <ul>
                {names.map(name=>{
                    return <li key={name}>{name}</li>
                })}
            </ul>
            <input type='text' onChange={(e)=>handleInput(e)}/>
            <button onClick={addUser}>Adicionar</button>            
        </>
    )
}

root.render(
    <ListNames/>
)