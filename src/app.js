import React, {useState} from 'react'
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'
import {Status} from './utils/constant'

const App = (props) => {
    const [todos, setTodos] = useState([
        {
            id: 0,
            text: "task 1",
            completed: false
        }
    ])

    const [filter, setFilter] = useState(Status.ALL)

    function handleAddTodo(text) {
        setTodos([...todos, {id: todos.length, text:text, completed:false}]);
    }

    function handleFilter(status) {
        setFilter(status)
    }

    function handleComplete(id) {
        setTodos(todos.map(val => (val.id === id) ? {...val, completed: !val.completed} : val))
    }

    return (
        <div>
            <TodoAdd onAddTodo={handleAddTodo} />
            <TodoList todos={todos} filter={filter} onComplete={handleComplete} />
            <TodoFilter onFilter={handleFilter} />
        </div>
    )
}

export default App