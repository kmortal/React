import React from 'react'
import ReactDOM from 'react-dom/client'
import './composition.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

//contenção padrão
function FancyBorder(props){
    return(
        <div className={"FancyBorder FancyBorder-" + props.color}>
            {props.children}
        </div>
    )
}

function WelcomeDialog(){
    return(
        <FancyBorder color='blue'>
            <h1 className='Dialog-title'>
                Bem-vindo
            </h1>
            <p className='Dialog-message'>
                Obrigado por visitar a nossa espaçonave
            </p>
        </FancyBorder>
    )
}

//contenção criativa
function Contacts(){
    return <div className='Contacts'/>
}

function Chat(){
    return <div className='Chat'/>
}

function SplitPane(props){
    return(
        <div className='SplitPane'>
            <div className='SplitPane-left'>
                {props.left}
            </div>
            <div className='SplitPane-right'>
                {props.right}
            </div>
        </div>
    )
}

function App(){
    return(
        <SplitPane left={<Contacts />} right={<Chat/>}/>
    )
}

//especialização
function Dialog(props){
    return (
        <FancyBorder color='blue'>
            <h1 className='Dialog-title'>{props.title}</h1>
            <p className='Dialog-message'>{props.message}</p>
        </FancyBorder>
    )
}

function WelcomeDialog2(){
    return(
        <Dialog title={'Bem-vindo'} message='Obrigado por visitar a nossa espaçonave'/>
    )
}
root.render(<WelcomeDialog2 />)