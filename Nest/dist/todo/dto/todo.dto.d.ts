export declare class UserDto {
    id: number;
    name: string;
    email: string;
    todos?: TodoDto[];
}
export declare class TodoDto {
    id: number;
    title: string;
    completed: boolean;
    user: UserDto;
}
export declare class CreateUserInputDto {
    name: string;
    email: string;
    password: string;
}
export declare class CreateTodoInputDto {
    title: string;
    completed: boolean;
    userId: number;
}
export declare class UpdateTodoInputDto {
    id: number;
    title?: string;
    completed?: boolean;
}
export declare class GetTodosByUserIdResponseDto {
    data: TodoDto[];
    stateCode: number;
    error: string;
    total: number;
}
export declare class GetUserResponseDto {
    user: UserDto;
}
export declare class GetTodoByIdResponseDto {
    todo: TodoDto;
}
