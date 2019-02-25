import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoStore from "../stores/TodoStore"
import ViewStore from "../stores/ViewStore"

import {observer}  from "mobx-react"

@observer
class TodoItems extends Component {
  
  getTodos() {
		return TodoStore.todos.filter(todo => {
			switch (ViewStore.todoViwe) {
				case "active":
					return !todo.completed;
				case "completed":
					return todo.completed;
				default:
					return true;
			}
		});
	}
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {
            this.getTodos().map(todo=>{
              return (
                <TodoItem todo={todo}/>
              )
            })
          }
        </ul>
      </section>
    );
  }
  
}
export default TodoItems;
