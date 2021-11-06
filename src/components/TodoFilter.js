import React from 'react'
import {Status} from '../utils/constant'

const TodoFilter = ({onFilter}) => (
    <div>
        Show {' '}
        <button onClick={()=>onFilter(Status.ALL)}>All</button>{' '}
        <button onClick={()=>onFilter(Status.ACTIVE)}>Active</button>{' '} 
        <button onClick={()=>onFilter(Status.COMPLETED)}>Completed</button>
    </div>
)

export default TodoFilter