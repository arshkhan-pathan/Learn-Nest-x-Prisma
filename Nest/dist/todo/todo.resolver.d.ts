import { UserService } from './user.service';
import { TodoService } from './todo.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    getUser(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
    }, unknown> & {}>;
    todos(user: any): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: number;
        title: string;
        completed: boolean;
        userId: number;
    }, unknown> & {})[]>;
    createUser(input: any): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
    }, unknown> & {}>;
}
export declare class TodoResolver {
    private readonly todoService;
    constructor(todoService: TodoService);
    getTodoById(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        title: string;
        completed: boolean;
        userId: number;
    }, unknown> & {}>;
    todos(todo: any): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
    }, unknown> & {}>;
    getTodosByUserId(userId: number): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: number;
        title: string;
        completed: boolean;
        userId: number;
    }, unknown> & {})[]>;
    createTodo(input: any): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        title: string;
        completed: boolean;
        userId: number;
    }, unknown> & {}>;
    updateTodo(input: any): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        title: string;
        completed: boolean;
        userId: number;
    }, unknown> & {}>;
    deleteTodo(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        title: string;
        completed: boolean;
        userId: number;
    }, unknown> & {}>;
}
