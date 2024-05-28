"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMemberDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_member_dto_1 = require("./create-member.dto");
class UpdateMemberDto extends (0, mapped_types_1.PartialType)(create_member_dto_1.CreateMemberDto) {
}
exports.UpdateMemberDto = UpdateMemberDto;
//# sourceMappingURL=update-member.dto.js.map