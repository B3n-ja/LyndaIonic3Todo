import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {

  private todos = [];
  private archivedTodos = [];
  constructor(public http: HttpClient) {
    console.log('Hello TodoProvider Provider');
  }

  getTodos(){
    return this.todos;
  }

  archiveTodo(todoIndex){
    let todoToBeArchived = this.todos[todoIndex];
    this.todos.splice(todoIndex, 1);
    this.archivedTodos.push(todoToBeArchived);
  }

  getArchivesTodos(){
    return this.archivedTodos;
  }

  addTodo(todo){
    this.todos.push(todo);
  }
}
