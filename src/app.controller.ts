import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import TodoDto from './todo.dto';

@Controller('todo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  addTodo(@Body() todoDto: TodoDto) {
    return this.appService.addTodo(todoDto);
  }

  @Get()
  getTodos() {
    return this.appService.getTodos();
  }

  @Get(':id')
  getTodo(@Param('id') id: string) {
    return this.appService.getTodo(id);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.appService.deleteTodo(id);
  }

  @Put(':id')
  updateTodo(@Param('id') id: string, @Body() todoDto: TodoDto) {
    return this.appService.updateTodo(id, todoDto);
  }
}
