import React from 'react'

const TodoAdd = ({onAddTodo}) => {
    let input

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input.value.trim()) {
            return
        }

        onAddTodo(input.value)
        input.value = "";
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

export default TodoAdd