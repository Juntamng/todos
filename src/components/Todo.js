import React from 'react'

const Todo = ({id, text, completed, onComplete}) => (
    <li
        onClick={()=>onComplete(id)}
        style={{
            textDecoration: completed ? 'line-through': 'none'
        }}
    >
        {text}
    </li>
)

export default Todo