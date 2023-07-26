import { PrismaService } from '../prisma/prisma.service';
export declare class TodoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getTodoById(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        title: string;
        completed: boolean;
        userId: number;
    }, unknown> & {}>;
    getTodoUser(todo: any): Promise<import("@prisma/client/runtime/library").GetResult<{
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
