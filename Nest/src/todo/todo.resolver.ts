import { Resolver, Query, Mutation, Args, Parent, ResolveField } from '@nestjs/graphql';
import { UserService } from './user.service';
import { TodoService } from './todo.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query('getUser')
  async getUser(@Args('id') id: number) {
    return this.userService.getUser(id);
  }

  @ResolveField('todos')
  async todos(@Parent() user) {
    const { id } = user;
    console.log(id);
    return this.userService.getUserTodos(id);
  }

  @Mutation('createUser')
  async createUser(@Args('input') input) {
    return this.userService.createUser(input);
  }
}

@Resolver('Todo')
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query('getTodoById')
  async getTodoById(@Args('id') id: number) {
    return this.todoService.getTodoById(id);
  }

  @ResolveField('user')
  async todos(@Parent() todo) {
    return this.todoService.getTodoUser(todo);
  }

  @Query('getTodosByUserId')
  async getTodosByUserId(@Args('userId') userId: number) {
    return this.todoService.getTodosByUserId(userId);
  }

  @Mutation('createTodo')
  async createTodo(@Args('input') input) {
    return this.todoService.createTodo(input);
  }

  @Mutation('updateTodo')
  async updateTodo(@Args('input') input) {
    return this.todoService.updateTodo(input);
  }

  @Mutation('deleteTodo')
  async deleteTodo(@Args('id') id: number) {
    return this.todoService.deleteTodo(id);
  }
}
