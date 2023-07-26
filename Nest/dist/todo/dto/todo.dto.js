"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTodoByIdResponseDto = exports.GetUserResponseDto = exports.GetTodosByUserIdResponseDto = exports.UpdateTodoInputDto = exports.CreateTodoInputDto = exports.CreateUserInputDto = exports.TodoDto = exports.UserDto = void 0;
const class_validator_1 = require("class-validator");
class UserDto {
}
exports.UserDto = UserDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UserDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
class TodoDto {
}
exports.TodoDto = TodoDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], TodoDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TodoDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], TodoDto.prototype, "completed", void 0);
class CreateUserInputDto {
}
exports.CreateUserInputDto = CreateUserInputDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "Must be a string input" }),
    (0, class_validator_1.Length)(3, 50),
    __metadata("design:type", String)
], CreateUserInputDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserInputDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserInputDto.prototype, "password", void 0);
class CreateTodoInputDto {
}
exports.CreateTodoInputDto = CreateTodoInputDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 50),
    __metadata("design:type", String)
], CreateTodoInputDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateTodoInputDto.prototype, "completed", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateTodoInputDto.prototype, "userId", void 0);
class UpdateTodoInputDto {
}
exports.UpdateTodoInputDto = UpdateTodoInputDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateTodoInputDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 50),
    __metadata("design:type", String)
], UpdateTodoInputDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateTodoInputDto.prototype, "completed", void 0);
class GetTodosByUserIdResponseDto {
}
exports.GetTodosByUserIdResponseDto = GetTodosByUserIdResponseDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], GetTodosByUserIdResponseDto.prototype, "stateCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetTodosByUserIdResponseDto.prototype, "error", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], GetTodosByUserIdResponseDto.prototype, "total", void 0);
class GetUserResponseDto {
}
exports.GetUserResponseDto = GetUserResponseDto;
class GetTodoByIdResponseDto {
}
exports.GetTodoByIdResponseDto = GetTodoByIdResponseDto;
//# sourceMappingURL=todo.dto.js.map