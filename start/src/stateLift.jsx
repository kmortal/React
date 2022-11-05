import React from "react";
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

function toFahrenheit(fahrenheit){
    return (fahrenheit -32) * 5 / 9
}

function toCelsius(celsius){
    return (celsius * 9 / 5) + 32
}

function tryConvert(temeprature, convert){
    const input = parseFloat(temeprature)
    if (Number.isNaN(input)){
        return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
}

function BoilingVerdict(props){
    if (props.celsius >= 100){
        return <p>A água ferveria</p>
    }

    return <p>A água não ferveria</p>
}

class TemperatureInput extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.props.onTemperatureChange(e.target.value)
    }

    render(){
        const temperature = this.props.temperature
        const scale = this.props.scale
        return(
            <fieldset>
                <legend>Informe a temperatura em {scaleName[scale]}:</legend>
                <input 
                    value={temperature}
                    onChange={this.handleChange}/>
            </fieldset>
        )
    }
}

class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
        this.state = {temperature: '', scale: 'c'}
    }

    handleCelsiusChange(temperature){
        this.setState({scale: 'c', temperature})
    }

    handleFahrenheitChange(temperature){
        this.setState({scale: 'f', temperature})
    }

    render(){
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

        return(
            <>
                <TemperatureInput 
                    scale='c'
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />

                <TemperatureInput
                    scale='f'
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />

                <BoilingVerdict celsius={parseFloat(celsius)} />
            </>
            
        )
    }
}

root.render(
    <Calculator />
)