import { Component, OnInit } from '@angular/core';

import { Task} from '../../models/task';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  task: Task[];


  constructor( public dataServices : DataService) { }

  ngOnInit(): void {
    this.task = this.dataServices.getTask();
  }

  addTask( task : Task) {
    this.dataServices.addTask(task);
  }
}
