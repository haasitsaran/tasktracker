import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faT, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit {


  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = 
      new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> =
      new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
      
  }

  onDelete(t:Task) {
    console.log(t);
    this.onDeleteTask.emit(t);
  }

  onToggle(t:Task) {
    console.log(t);
    this.onToggleReminder.emit(t);
  }


  

}
