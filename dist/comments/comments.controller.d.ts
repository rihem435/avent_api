import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    createComment(createCommentDto: CreateCommentDto): Promise<import("src/comments/interface/comments.interface").IComment>;
    getAllComment(): Promise<import("src/comments/interface/comments.interface").IComment[]>;
    getComment(id: string): Promise<import("src/comments/interface/comments.interface").IComment>;
    updateComment(id: string, updateCommentDto: UpdateCommentDto): Promise<import("src/comments/interface/comments.interface").IComment>;
    deleteComment(id: string): Promise<import("src/comments/interface/comments.interface").IComment>;
}
