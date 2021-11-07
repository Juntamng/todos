import React from 'react'
import {VisibilityFilters, setVisibilityFilter} from '../actions'
import {connect} from 'react-redux'

const TodoFilter = ({dispatch, selectAll, selectActive, selectCompleted}) => (
    <div>
        Show {' '}
        <button onClick={selectAll}>All</button>{' '}
        <button onClick={selectActive}>Active</button>{' '} 
        <button onClick={selectCompleted}>Completed</button>
    </div>
)

const mapDispatchToProps = (dispatch, ownProps) => ({
    selectAll: () => dispatch(setVisibilityFilter(VisibilityFilters.ALL)),
    selectActive: () => dispatch(setVisibilityFilter(VisibilityFilters.ACTIVE)),
    selectCompleted: () => dispatch(setVisibilityFilter(VisibilityFilters.COMPLETED))
})

export default connect(null, mapDispatchToProps)(TodoFilter)