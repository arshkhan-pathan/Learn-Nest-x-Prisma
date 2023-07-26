import { Injectable, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as dto from "./dto/todo.dto"
import { validate } from 'class-validator';
import { BadRequestException, HttpException } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUser(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async createUser(input:dto.CreateUserInputDto) {
    const errors = await validate(input);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    try {
      return this.prisma.user.create({ data: input });
    } catch (error) {
      throw new HttpException(
        'An error occurred while creating the user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getUserTodos(userId: number) {
    return this.prisma.todo.findMany({ where: { userId } });
  }
}
