import { PrismaService } from '../prisma/prisma.service';
import * as dto from "./dto/todo.dto";
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getUser(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
    }, unknown> & {}>;
    createUser(input: dto.CreateUserInputDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
    }, unknown> & {}>;
    getUserTodos(userId: number): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: number;
        title: string;
        completed: boolean;
        userId: number;
    }, unknown> & {})[]>;
}
