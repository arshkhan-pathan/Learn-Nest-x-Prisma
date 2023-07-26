import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  async getTodoById(id: number) {
    return this.prisma.todo.findUnique({ where: { id } });
  }

  async getTodoUser(todo) {
    const { userId } = todo;
    return this.prisma.user.findUnique({ where: { id: userId } });
  }

  async getTodosByUserId(userId: number) {
    return this.prisma.todo.findMany({ where: { userId } });
  }

  async createTodo(input) {
    return this.prisma.todo.create({ data: input });
  }

  async updateTodo(input) {
    const { id, ...data } = input;
    return this.prisma.todo.update({ where: { id }, data });
  }

  async deleteTodo(id: number) {
    return this.prisma.todo.delete({ where: { id } });
  }
}
