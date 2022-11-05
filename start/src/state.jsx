import React from 'react'
import ReactDOM from 'react-dom/client'




const root = ReactDOM.createRoot(document.getElementById('root'))

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {date: new Date()}
    }
    
    //métodos de ciclo de vida
    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000)
    }
    
    //se o componente for removido da DOM
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    
    tick(){
        this.setState({date: new Date()})
    }

    render(){
        return(
            <>
            <h1>Hello, World.</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </>
        )
    }
}

root.render(<Clock />)
//um pouco mais de state no event.jsx