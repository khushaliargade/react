import React from 'react'
const Func = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.name}
                {props.children}</h1>
        </div>
    )
}
export default Func
