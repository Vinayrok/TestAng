import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  constructor() { }

  todo: Todo[]  = [];
  
     // Create a BehaviorSubject to hold the current state of todos
     private todosSubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>(this.todo);
     // Create an Observable from the BehaviorSubject
    todoObservable: Observable<Todo[]> = this.todosSubject.asObservable();

    getTodoById(id: string): Todo | undefined {
      return this.todo.find(todo => todo.id === id);
  }

  saveTodo(item:Todo)
  {
    this.todo?.push(item);
    this.todosSubject.next(this.todo);
  }

  deleteTodo(id:string)
  {
    this.todo = this.todo.filter(todo => todo.id !== id);
    console.log(this.todo);
    this.todosSubject.next(this.todo); // Update the BehaviorSubject
  }

}
