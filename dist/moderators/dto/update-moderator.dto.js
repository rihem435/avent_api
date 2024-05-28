"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateModeratorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_moderator_dto_1 = require("./create-moderator.dto");
class UpdateModeratorDto extends (0, mapped_types_1.PartialType)(create_moderator_dto_1.CreateModeratorDto) {
}
exports.UpdateModeratorDto = UpdateModeratorDto;
//# sourceMappingURL=update-moderator.dto.js.map