import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
    new Todo('This is a test!'),
    new Todo('Is this a test?')
  ]

  constructor() { }

  getTodos() {
    return this.todos;
    
  }

  getTodo(id: string) {
    return this.todos.find(t => t.id === id)
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(id: string, updatedTodoFields: Partial<Todo>) {
    const todo = this.getTodo(id);
    Object.assign(todo, updatedTodoFields);
  }

  deleteTodo(id: string) {
    const index = this.todos.findIndex(t => t.id === id);
    console.log(index)
    if (index == -1) return

    this.todos.splice(index, 1);
  }
}
