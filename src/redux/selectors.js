import { VISIBILITY_FILTERS } from "../constants";

export const getTodosState = state => state.todos;

export const getTodoList = state =>
    getTodosState(state) ? getTodosState(state).allIds : [];

export const getTodoById = (state, id) =>
    getTodosState(state) ? {...getTodosState(state).byIds[id], id}: {};

export const getTodos = state =>
    getTodoList(state).map(id => getTodoById(state, id));

export const getTodosByVisibilityFilter = (state, filter) => {
    const allTodos = getTodos(state);

    switch(filter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allTodos;
    }
}