import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoResolver, UserResolver } from './todo.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { UserService } from './user.service';

@Module({
  imports: [PrismaModule],
  providers: [TodoResolver, TodoService, UserResolver,UserService],
})
export class TodoModule {}
