import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TodoserviceService } from '../services/todoservice.service';
import { Todo } from '../model/todo';
import { Guid } from "guid-typescript";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private router: Router, private todoService: TodoserviceService) { }

  @ViewChild('inputTodo') inputTodoRef!: ElementRef;
  ngOnInit(): void {

    this.todoService.todoObservable.subscribe(todos => {
      console.log('Updated Todos:', todos);
      this.todoList = todos;
    });
  }

  todoList: Todo[] = [];
  todoArray: Todo[] = [];



  SaveTodo(val: string) {

    const todoItem: Todo = {
      id: Guid.create().toString(),
      value: val
    };
    const inputElement: HTMLInputElement = this.inputTodoRef.nativeElement;
    //this.todoList.push(val);
    this.todoService.saveTodo(todoItem);
   inputElement.value = '';

  }

  deleteToDos(id: string) {
    this.todoService.deleteTodo(id.toString());
    //this.todoList = this.todoList.filter(item => item.value !== val)

  }

  viewData(value: any) {
    this.router.navigate(['/ToDoView/' + value])
  }

}
