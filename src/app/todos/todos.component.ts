import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos!: Todo[];

  constructor(private todoService: TodoService ) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos()
  }

  toggleCompleted(todo: Todo) {
    console.log(todo.completed)

    console.log(todo.id)
    this.todoService.updateTodo(todo.id, { completed: todo.completed} )
    
  }

}
