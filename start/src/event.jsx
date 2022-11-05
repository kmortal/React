import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

class Toogle extends React.Component{
    constructor(props){
        super(props)
        this.state = {isToggleOn: true}

        //bind para this funcionar dentro da callback
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render(){
        return(
            <button 
                onClick={this.handleClick}
            >

                {this.state.isToggleOn ? 'ON' : 'OFF'}
                
            </button>
        )
    }
}

root.render(<Toogle />)