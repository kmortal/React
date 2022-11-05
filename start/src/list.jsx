import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'))


function NumberList(props){
    const numbers = props.numbers

    // alternativa 1
    // const doubled = numbers.map((number)=><li key={number.toString()}>{number*2}</li>)

    // return(
    //     <ul>{doubled}</ul>
    // )

    //alternativa 2
    return(
        <ul>
            {numbers.map((number)=>
                <li key={number.toString()}>{number*2}</li>
        )}
        </ul>
    )
}


const numbers = [0,1,2,3,4,5]

root.render(
    <NumberList numbers={numbers}/>
)