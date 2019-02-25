import {observable, action } from "mobx";

export default class TodoModel{
    store
    id
    @observable title
    @observable completed

    constructor(store, title, completed, id){
            this.title = title
            this.completed = completed
            this.id = id
            this.store = store
    }

    @action
    toggle(){
        this.completed = !this.completed
        if(this.completed){
            this.store.completedCount++
            this.store.activeTodoCount--

        }else{
            this.store.completedCount--
            this.store.activeTodoCount++


        }
    }

    destroy() {
		this.store.todos.remove(this);
	}
}