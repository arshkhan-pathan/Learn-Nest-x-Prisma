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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const class_validator_1 = require("class-validator");
const common_2 = require("@nestjs/common");
let UserService = exports.UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getUser(id) {
        return this.prisma.user.findUnique({ where: { id } });
    }
    async createUser(input) {
        const errors = await (0, class_validator_1.validate)(input);
        if (errors.length > 0) {
            throw new common_2.BadRequestException(errors);
        }
        try {
            return this.prisma.user.create({ data: input });
        }
        catch (error) {
            throw new common_2.HttpException('An error occurred while creating the user', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getUserTodos(userId) {
        return this.prisma.todo.findMany({ where: { userId } });
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map