import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { VISIBILITY_FILTERS } from "../constants";
import { getTodosByVisibilityFilter } from "../redux/selectors";

class TodoList extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        const { todos } = this.props;
        console.log(todos);
        return (
            <ul className="todo-list">
                {todos && todos.length ?
                    todos.map((todo, index) => {
                        return <Todo key={`todo-${todo.id}`} todo={todo}></Todo>;
                    })
                : "No todos, yay!"}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return {todos};
}

export default connect(mapStateToProps)(TodoList);