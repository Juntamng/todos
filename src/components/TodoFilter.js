import React from 'react'
import {VisibilityFilters, setVisibilityFilter} from '../actions'
import {connect} from 'react-redux'

const TodoFilter = ({dispatch}) => (
    <div>
        Show {' '}
        <button onClick={()=>dispatch(setVisibilityFilter(VisibilityFilters.ALL))}>All</button>{' '}
        <button onClick={()=>dispatch(setVisibilityFilter(VisibilityFilters.ACTIVE))}>Active</button>{' '} 
        <button onClick={()=>dispatch(setVisibilityFilter(VisibilityFilters.COMPLETED))}>Completed</button>
    </div>
)

export default connect()(TodoFilter)