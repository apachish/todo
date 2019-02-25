import {observable, action } from "mobx";
import TodoModel from './TodoModel'
class TodoStore{
    @observable todos = []
    lastID = 0
    @observable activeTodoCount=0
    @observable completedCount=0
    @observable todoViwe="3"
    @action
    addTodo(title){
        this.todos.push(new TodoModel(this, title, false, this.lastID ++))
        this.activeTodoCount++;
    }

	@action
	clearCompleted(){
		this.todos = this.todos.filter(
			todo => !todo.completed
        );
        this.completedCount = 0
	}


}

const store =new TodoStore()
export default store