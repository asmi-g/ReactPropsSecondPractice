import React from "react"

function Joke(props){
    if (props.setup && props.punchline)
    {
        return(
            <div>
                <h4>{props.setup}</h4>
                <p>{props.punchline}</p>
                <hr />
            </div>
        )
    }
    
    else{
        return(
            <div>
                <h4>{props.punchline}</h4>
            </div>
        )
    }
}

export default Joke