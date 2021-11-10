import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import { loadTodo } from './actions'

import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'

const App = ({loadData}) => {
    useEffect(()=>{
        fetch('/api')
        .then(res => res.json())
        .then(data => {
            console.log(data.data.todos)
            loadData(data.data.todos)
        })
    },[])
    return (
        <div>
            <TodoAdd/>
            <TodoList />
            <TodoFilter />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    loadData: (data) => {
        dispatch(loadTodo(data))
    }
})

export default connect(null, mapDispatchToProps)(App)