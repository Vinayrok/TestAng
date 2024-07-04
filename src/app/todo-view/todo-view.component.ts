import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../model/todo';
import { TodoserviceService } from '../services/todoservice.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private todoservice: TodoserviceService) { }
  item: any;
  ngOnInit(): void {

    let itemId: any | null | undefined;
    itemId = this.route.snapshot.paramMap.get('item');
    this.item = this.todoservice.getTodoById(itemId.toString());
  }

}
