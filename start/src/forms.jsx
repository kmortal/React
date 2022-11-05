import React from "react";
import ReactDOM from "react-dom/client";



const root = ReactDOM.createRoot(document.getElementById('root'))

//componentes controlados
class NameForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        alert('Um nome foi adicionado: ' + this.state.value)
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome:
                    {/* poderia ser escrito com a tag <textarea/> */}
                    <input type='text' onChange={this.handleChange}/> 
                </label>
                    <input type='submit' value='Enviar'/>
            </form>
        )
    }
}

class DropdownForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {value: 'coco'}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        alert('Seu sabor favorito é: ' + this.state.value)
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Escolha seu sabor favorito:
                    <select value={this.state.value} onChange={this.handleChange}>

                        <option value='laranja'>Laranja</option>
                        <option value='limão'>Limão</option>
                        <option value='coco'>Coco</option>
                        <option value='manga'>Manga</option>

                    </select>
                </label>
                <input type='submit' value='Enviar'/>
            </form>
        )
    }
}

//multiplos inputs
class Reservation extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <form>
                <label>
                    Estão indo:
                    <input
                        name='isGoing'
                        type='checkbox'
                        checked={this.state.isGoing}
                        onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Número de convidados:
                    <input
                        name='numberOfGuests'
                        type='number'
                        value={this.state.numberOfGuests}
                        onChange={this.handleChange}
                        />
                </label>
            </form>
        )
    }
}
root.render(<Reservation />)