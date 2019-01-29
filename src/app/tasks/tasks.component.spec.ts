import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskService } from '../task.service';
import { TasksComponent } from './tasks.component';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
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

  it("should match the tasks array in the task.service", () => {
    expect(component.tasks).toEqual([
      'Eat muffins', 'Hug Princess Luna plushie', 'Buy a Rainbow Dash plushie', 
      'Play Smash Ultimate', 'Watch video game-related videos']);
  });

  it("first index should be 'Eat muffins' based on the array in the task.service", () => {
    expect(component.tasks[0]).toEqual("Eat muffins");
  });

  it("length of the array should match the array length found in task.service", () => {
    expect(component.tasks.length).toEqual(5);
  });
});
