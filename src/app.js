import React, {Component} from 'react'
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [
                {
                    id: 0,
                    text: "task 1",
                    completed: false
                },
                {
                    id: 1,
                    text: "task 2",
                    completed: true
                }
            ],
            showAll: true
        }
    }

    render() {
        return (
            <div>
                <TodoAdd/>
                <TodoList todos={this.state.todos} />
                <TodoFilter/>
            </div>
        )
    }
}

export default App