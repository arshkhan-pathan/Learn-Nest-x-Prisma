"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTodoInput = void 0;
const create_todo_input_1 = require("./create-todo.input");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdateTodoInput extends (0, mapped_types_1.PartialType)(create_todo_input_1.CreateTodoInput) {
}
exports.UpdateTodoInput = UpdateTodoInput;
//# sourceMappingURL=update-todo.input.js.map