import React from 'react'
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'

const App = (props) => {
    return (
        <div>
            <TodoAdd/>
            <TodoList />
            <TodoFilter />
        </div>
    )
}

export default App