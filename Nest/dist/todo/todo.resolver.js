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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoResolver = exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_service_1 = require("./user.service");
const todo_service_1 = require("./todo.service");
let UserResolver = exports.UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    async getUser(id) {
        return this.userService.getUser(id);
    }
    async todos(user) {
        const { id } = user;
        console.log(id);
        return this.userService.getUserTodos(id);
    }
    async createUser(input) {
        return this.userService.createUser(input);
    }
};
__decorate([
    (0, graphql_1.Query)('getUser'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUser", null);
__decorate([
    (0, graphql_1.ResolveField)('todos'),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "todos", null);
__decorate([
    (0, graphql_1.Mutation)('createUser'),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
exports.UserResolver = UserResolver = __decorate([
    (0, graphql_1.Resolver)('User'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
let TodoResolver = exports.TodoResolver = class TodoResolver {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async getTodoById(id) {
        return this.todoService.getTodoById(id);
    }
    async todos(todo) {
        return this.todoService.getTodoUser(todo);
    }
    async getTodosByUserId(userId) {
        return this.todoService.getTodosByUserId(userId);
    }
    async createTodo(input) {
        return this.todoService.createTodo(input);
    }
    async updateTodo(input) {
        return this.todoService.updateTodo(input);
    }
    async deleteTodo(id) {
        return this.todoService.deleteTodo(id);
    }
};
__decorate([
    (0, graphql_1.Query)('getTodoById'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "getTodoById", null);
__decorate([
    (0, graphql_1.ResolveField)('user'),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "todos", null);
__decorate([
    (0, graphql_1.Query)('getTodosByUserId'),
    __param(0, (0, graphql_1.Args)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "getTodosByUserId", null);
__decorate([
    (0, graphql_1.Mutation)('createTodo'),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "createTodo", null);
__decorate([
    (0, graphql_1.Mutation)('updateTodo'),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "updateTodo", null);
__decorate([
    (0, graphql_1.Mutation)('deleteTodo'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "deleteTodo", null);
exports.TodoResolver = TodoResolver = __decorate([
    (0, graphql_1.Resolver)('Todo'),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoResolver);
//# sourceMappingURL=todo.resolver.js.map