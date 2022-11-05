import React from  'react'
import ReactDOM from 'react-dom/client'


//func comp
function WelcomeFunc(props){
    return <h1>Olá, {props.name}</h1>
}

//class comp
class WelcomeClass extends React.Component{
    render(){
        return <h1>Olá, {this.props.name}</h1>
    }
}

const funcElement = <WelcomeFunc name='Sara'/>
const classElement = <WelcomeClass name='Sara'/>



//compondo componentes
function App(){
    return(
        <>
            <WelcomeFunc name='Sara'/>
            <WelcomeFunc name='Ísis'/>
            <WelcomeFunc name='Kelvyn'/>
        </>
    )
    
}



//extraindo componentes
const comment = {
    author: {
        avatarUrl: 'https://source.unsplash.com/random',
        name: 'Kelvyn'
    },
    text: 'Aprendendo React',
    date: new Date()
}

function Avatar(props){
    return(
        <img src={props.user.avatarUrl} alt={props.user.name} style={{width:200, height: 200}}/>
    )
}

function UserInfo(props){
    return(
        <div className="UserInfo">

          <Avatar user={props.user}/>

          <div className="UserInfo-name">{props.user.name}</div>

        </div>
    )
}

function CommentText(props){
    return(
        <div className="Comment-text">{props.text}</div>
    )
}

function CommentDate(props){
    return(
        <div className="Comment-date">{formatDate(props.date)}</div>
    )
}

function formatDate(date){
    return date.toLocaleDateString()
}

function Comment(props){
    return(
        <div className="Comment">

            <UserInfo user={props.user}/>

            <CommentText text={props.text}/>

            <CommentDate date={props.date}/>
        </div>
    )
}

function PostComment(props) {
    return (
      <Comment 
        user={props.author} 
        text={props.text} 
        date={props.date}
      />
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <PostComment 
        author={comment.author}
        date={comment.date}
        text={comment.text}
    />
)