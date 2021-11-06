import React from 'react'
import {toggleTodo} from '../actions'
import {connect} from 'react-redux'

const Todo = ({id, text, completed, dispatch}) => (
    <li
        onClick={()=>dispatch(toggleTodo(id))}
        style={{
            textDecoration: completed ? 'line-through': 'none'
        }}
    >
        {text}
    </li>
)

export default connect()(Todo)