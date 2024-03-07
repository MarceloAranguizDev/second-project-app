import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
@Controller('tasks')
export class TasksController {
  //Decorador para dar más información
  //Get es para recibir datos
  @Get()
  getTasks(): { hello: string } {
    return { hello: 'world' };
  }

  //Post es para enviar datos
  @Post()
  //@Body cada vez que llegue una petición podemos recibir el cuerpo
  createTask(@Body() task: CreateTaskDto): string {
    console.log(task.title, task.description, task.done);
    return 'Creando una tarea';
  }

  //Delete es para eliminar datos
  @Delete(':id')
  deleteTask(@Param('id') id): string {
    console.log(id);
    return `eliminando tarea ${id}`;
  }

  //Put es para actualizar datos
  @Put(':id')
  updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
    console.log(task);
    console.log(id);
    return `Actualizando tarea ${id}`;
  }
}
