import React from 'react'
import Todo from './Todo'
import {Status} from '../utils/constant'

const getFilterTodos = (todos, filter) => {
    switch(filter) {
        case Status.ALL:
            return todos;
        case Status.ACTIVE:
            return todos.filter(val => !val.completed)
        case Status.COMPLETED:
            return todos.filter(val => val.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const TodoList = ({todos, filter, onComplete}) => (
    <ul>
    { getFilterTodos(todos, filter).map(todo => <Todo key={todo.id} onComplete={onComplete} {...todo} />) }
    </ul>
)

export default TodoList