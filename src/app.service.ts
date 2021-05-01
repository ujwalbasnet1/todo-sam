import { Injectable } from '@nestjs/common';
import TodoDto from './todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import TodoEntity from './todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}

  addTodo(todoDto: TodoDto) {
    return this.todoRepository.insert(todoDto);
  }

  getTodos() {
    return this.todoRepository.find();
  }

  getTodo(id: string) {
    return this.todoRepository.findOne(id);
  }

  deleteTodo(id: string) {
    return this.todoRepository.delete(id);
  }

  updateTodo(id: string, todoDto: TodoDto) {
    return this.todoRepository.update(id, todoDto);
  }
}
