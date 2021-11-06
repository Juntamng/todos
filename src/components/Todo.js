import React from 'react'

const Todo = ({text, completed}) => (
    <li
        style={{
            textDecoration: completed ? 'line-through': 'none'
        }}
    >
        {text}
    </li>
)

export default Todo