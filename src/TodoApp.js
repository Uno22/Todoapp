
import React, { Component } from "react";
import "./styles.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";

class TodoApp extends Component {
    render () {
        return (
            <div className="todo-app">
                <AddTodo />
                <TodoList />
                <VisibilityFilters />
            </div>
        );
    }
}

export default TodoApp;