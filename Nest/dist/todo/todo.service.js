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
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TodoService = exports.TodoService = class TodoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getTodoById(id) {
        return this.prisma.todo.findUnique({ where: { id } });
    }
    async getTodoUser(todo) {
        const { userId } = todo;
        return this.prisma.user.findUnique({ where: { id: userId } });
    }
    async getTodosByUserId(userId) {
        return this.prisma.todo.findMany({ where: { userId } });
    }
    async createTodo(input) {
        return this.prisma.todo.create({ data: input });
    }
    async updateTodo(input) {
        const { id, ...data } = input;
        return this.prisma.todo.update({ where: { id }, data });
    }
    async deleteTodo(id) {
        return this.prisma.todo.delete({ where: { id } });
    }
};
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TodoService);
//# sourceMappingURL=todo.service.js.map