import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    createComment(createCommentDto: CreateCommentDto): Promise<import("src/comments/interface/comments.interface").IComment>;
    findAllByEventAndUser(user_id: string, event_id: string, response: any): Promise<any>;
    findAll(response: any): Promise<any>;
    getComment(id: string): Promise<import("src/comments/interface/comments.interface").IComment>;
    updateComment(id: string, updateCommentDto: UpdateCommentDto): Promise<import("src/comments/interface/comments.interface").IComment>;
    deleteComment(id: string): Promise<import("src/comments/interface/comments.interface").IComment>;
}
