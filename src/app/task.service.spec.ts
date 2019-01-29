import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('TaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service).toBeTruthy();
  });

  it("should match the tasks array", () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service.tasks).toEqual([
      'Eat muffins', 'Hug Princess Luna plushie', 'Buy a Rainbow Dash plushie', 
      'Play Smash Ultimate', 'Watch video game-related videos']);
  });

  it("first index of the tasks array should be 'Eat muffins' ", () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service.tasks[0]).toEqual("Eat muffins");
  });

  it("length of the array is 5", () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service.tasks.length).toEqual(5);
  });
});
