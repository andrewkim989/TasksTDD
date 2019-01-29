import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  tasks: any[] = ["Eat muffins", "Hug Princess Luna plushie", "Buy a Rainbow Dash plushie",
    "Play Smash Ultimate", "Watch video game-related videos"];
  
  getTasks() {
    return this.tasks;
  }
}
