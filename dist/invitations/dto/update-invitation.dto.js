"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInvitationDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_invitation_dto_1 = require("./create-invitation.dto");
class UpdateInvitationDto extends (0, mapped_types_1.PartialType)(create_invitation_dto_1.CreateInvitationDto) {
}
exports.UpdateInvitationDto = UpdateInvitationDto;
//# sourceMappingURL=update-invitation.dto.js.map