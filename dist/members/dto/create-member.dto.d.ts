import { CreateUserDto } from "src/users/dto/create-user.dto";
export declare class CreateMemberDto extends CreateUserDto {
    readonly member_civility_title: string;
    readonly member_martial_status: string;
}
