const todos = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_TODO':
            return [
                ...state,
                ...action.payload
            ]
        case 'ADD_TODO':
            const id = state.length;

            return [
                ...state,
                {
                    id: id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id) ?
                    {...todo, completed: !todo.completed} :
                    todo
            )
        default:
            return state
    }
}

export default todos