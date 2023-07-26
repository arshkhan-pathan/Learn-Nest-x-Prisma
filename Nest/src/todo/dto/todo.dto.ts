import { IsInt, IsString, IsBoolean, IsEmail, Length } from 'class-validator';
import { Transform } from 'class-transformer';

export class UserDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  todos?: TodoDto[];
}

export class TodoDto {
  @IsInt()
  id: number;

  @IsString()
  title: string;

  @IsBoolean()
  completed: boolean;

  user: UserDto;
}

export class CreateUserInputDto {
  @IsString({message:"Must be a string input"})
  @Length(3, 50)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class CreateTodoInputDto {
  @IsString()
  @Length(3, 50)
  title: string;

  @IsBoolean()
  completed: boolean;

  @IsInt()
  userId: number;
}

export class UpdateTodoInputDto {
  @IsInt()
  id: number;

  @IsString()
  @Length(3, 50)
  title?: string;

  @IsBoolean()
  completed?: boolean;
}

export class GetTodosByUserIdResponseDto {
  data: TodoDto[];

  @IsInt()
  stateCode: number;

  @IsString()
  error: string;

  @IsInt()
  total: number;
}

export class GetUserResponseDto {
  user: UserDto;
}

export class GetTodoByIdResponseDto {
  todo: TodoDto;
}

