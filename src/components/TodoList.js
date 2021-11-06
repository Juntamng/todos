import React from 'react'
import Todo from './Todo'
import {VisibilityFilters} from '../actions'
import { connect } from 'react-redux'

const getFilterTodos = (todos, filter) => {
    switch(filter) {
        case VisibilityFilters.ALL:
            return todos;
        case VisibilityFilters.ACTIVE:
            return todos.filter(val => !val.completed)
        case VisibilityFilters.COMPLETED:
            return todos.filter(val => val.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    todos: getFilterTodos(state.todos, state.visibilityFilter)
})

const TodoList = ({todos}) => (
    <ul>
    { todos.map(todo => <Todo key={todo.id} {...todo} />) }
    </ul>
)

export default connect(
    mapStateToProps
)(TodoList)