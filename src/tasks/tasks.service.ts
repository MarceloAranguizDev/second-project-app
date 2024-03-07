import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task';
@Injectable()
export class TasksService {
  task: Task[] = [
    {
      id: 1,
      title: 'Testeo',
      description: 'Descripción del testeo',
      done: true,
    },
    {
      id: 2,
      title: 'Testeo 2',
      description: 'Descripción del testeo',
      done: true,
    },
    {
      id: 3,
      title: 'Testeo 3',
      description: 'Descripción del testeo',
      done: true,
    },
  ];

  getTasks() {
    return this.task;
  }

  getTask(id) {
    return this.task.find((task) => task.id === id);
  }
}
