import React, { Component } from "react";
import { observer } from "mobx-react";
import { action } from "mobx";

import TodoStore from "../stores/TodoStore";
import ViewStore from "../stores/ViewStore";

@observer
export default class TodoFooter extends Component {
  @action
  clearCompleted = () => {
    TodoStore.clearCompleted();
  };
  changeView = (view) => {
    ViewStore.todoViwe = view
  };
  render() {
    if (!TodoStore.todos.length) return null;
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{TodoStore.activeTodoCount}</strong>
          {TodoStore.activeTodoCount == 1 ? "item" : "items"} left
        </span>
        <ul className="filters">
          <li>
            <a
              href="#"
              className={ViewStore.todoViwe == "all" ? "selected" : ""}
              onClick={this.changeView}
              onClick={
                event => this.changeView('all')
              }
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#active"
              className={ViewStore.todoViwe == "active" ? "selected" : ""}
              onClick={
                event => this.changeView('active')
              }
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#completed"
              className={ViewStore.todoViwe == "completed" ? "selected" : ""}
              onClick={
                event => this.changeView('completed')
              }
            >
              Completed
            </a>
          </li>
        </ul>
        {TodoStore.completedCount === 0 ? null : (
          <button className="clear-completed" onClick={this.clearCompleted}>
            Clear completed
          </button>
        )}
      </footer>
    );
  }
}
