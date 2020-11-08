import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task'
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input('task') task:Task;

  constructor( public dataSerice : DataService) { }

  ngOnInit(): void {
  }

  removeTask(task: Task){
    const respuesta = confirm('Arre you sure to delete the element?');
    if (respuesta){
      this.dataSerice.removeTask(task);
    }
  }

}
