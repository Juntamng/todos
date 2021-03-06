import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const TodoAdd = ({dispatch}) => {
    let input

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input.value.trim()) {
            return
        }

        dispatch(addTodo(input.value))
        input.value = ''
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input ref={node => input=node} />
                <button>Add Too</button>
            </form>
        </div>
    )
}

export default connect()(TodoAdd)