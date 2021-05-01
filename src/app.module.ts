import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import TodoEntity from './todo.entity';

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([TodoEntity])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
