import { Injectable } from '@angular/core';

import { Task } from '../models/task'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  tasks: Task [];

  constructor() { 
    //this.tasks = [
    //  { title: '', description:'', hide: true  }
    //];  
  }

  getTask(): Task[] {
    if (localStorage.getItem('task') === null){
      this.tasks = [];
    } else {
      this.tasks = JSON.parse(localStorage.getItem('task'));
    }
    return this.tasks;
  }

  addTask(task:Task): void {

    this.tasks.unshift(task);
    
    let tasks;
        
    if (localStorage.getItem('task')== null) {
      tasks = [];
      tasks.unshift(task);
      localStorage.setItem('tasks', JSON.stringify(task));
    } else {
      task = JSON.parse(localStorage.getItem('task'));
      tasks.unshift(task);
      localStorage.setItem('tasks', JSON.stringify(task));
    }

  } 


  removeTask(task: Task) {
    for (let i = 0; this.tasks.length; i++){
      if (task == this.tasks[i]){
        this.tasks.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
  }


}