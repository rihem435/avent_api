/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Model } from 'mongoose';
import { IEvent } from 'src/events/interface/events.interface';
import { IComment } from './interface/comments.interface';
import { IUser } from 'src/users/interface/users.interface';
export declare class CommentsService {
    private CommentsModel;
    private UserModel;
    private EventModel;
    constructor(CommentsModel: Model<IComment>, UserModel: Model<IUser>, EventModel: Model<IEvent>);
    createComment(createCommentDto: CreateCommentDto): Promise<IComment>;
    updateComment(CommentId: string, updateCommentDto: UpdateCommentDto): Promise<IComment>;
    getAllComment(): Promise<IComment[]>;
    findAllByEventAndUser(eventId: string, userId: string): Promise<IComment[]>;
    getComment(CommentId: string): Promise<IComment>;
    deleteComment(CommentId: string): Promise<IComment>;
}
