import { IUser } from "../../users/interface/users.interface";
export interface IMember extends IUser {
    readonly member_civility_title: string;
    readonly member_martial_status: string;
}
