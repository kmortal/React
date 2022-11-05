import React from "react";
import ReactDOM from "react-dom/client";



const root = ReactDOM.createRoot(document.getElementById('root'))

//condidional components
function UserGreeting(props){
    return <h1>Wekcome back.</h1>
}

function GuestGreeting(props){
    return <h1>Please sign up.</h1>
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn
    if (isLoggedIn){
        return <UserGreeting/>
    }
    return <GuestGreeting/>
}

//elements variables
function LoginButton(props){
    return(
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

function LogoutButton(props){
    return(
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

class LoginControl extends React.Component{
    constructor(props){
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state = {isLoggedIn: false}
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false})
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn
        let button
        //if-Else
        // if (isLoggedIn){
        //     button = <LogoutButton onClick={this.handleLogoutClick}/>
        // } else {
        //     button = <LoginButton onClick={this.handleLoginClick}/>
        // }
        return (
            //If-Else inline
            <>
                <Greeting isLoggedIn={isLoggedIn}/>
                <div>
                    {isLoggedIn
                    ? <LogoutButton onClick={this.handleLogoutClick} />
                    : <LoginButton onClick={this.handleLoginClick} />      
                    }
                </div>
            </>
        )
    }
}

//if in line 
//'true && expressão' são sempre avaliadas como 'expressão';
//'false && expressão' são sempre avaliadas como 'false'
function Mailbox(props){
    const unreadMessages = props.unreadMessages
    return(
        <>
            <h1>Hello.</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages
                </h2>
            }
        </>
    )
}

const messages = ['React']



//nao renderizando um elemento com 'null'
function WarningBanner(props) {
    if (!props.warn) {
        return null
    }
  
    return (
        <div className="warning">
            Warning!
        </div>
    )
}
  
class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = {showWarning: true}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
        showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
        <div>
            <WarningBanner warn={this.state.showWarning} />
            <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
            </button>
        </div>
        )
    }
}

root.render(<LoginControl />)