import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { IAdminstrator } from 'src/adminstrators/interface/adminstrators.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IEvent } from 'src/events/interface/events.interface';
import { IComment } from './interface/comments.interface';
import { IUser } from 'src/users/interface/users.interface';

@Injectable()
export class CommentsService {
  constructor(@InjectModel('comments') private CommentsModel: Model<IComment>, @InjectModel('users') private UserModel: Model<IUser>, @InjectModel('events') private EventModel: Model<IEvent>) { }

  async createComment(createCommentDto: CreateCommentDto): Promise<IComment> {

    const newComment = await new this.CommentsModel(createCommentDto);
console.log(`comment--------- ${newComment}`)
    /*-- Déclaration d'un remplissage automatique d'un tableau --*/
    await this.UserModel.findByIdAndUpdate(createCommentDto.user_id, { $push: { comments: newComment } });

    /*-- Déclaration d'un remplissage automatique d'un tableau --*/
    await this.EventModel.findByIdAndUpdate(createCommentDto.event_id, { $push: { comments: newComment } });

    return newComment.save();

  }

  async updateComment(CommentId: string, updateCommentDto: UpdateCommentDto): Promise<IComment> {
    const existingComment = await this.CommentsModel.findByIdAndUpdate(CommentId, updateCommentDto, { new: true });

    if (!existingComment) {
      throw new NotFoundException('Comment #${CommentId} not found');
    }
    return existingComment;
  }

  async getAllComment(): Promise<IComment[]> {
    const CommentData = await this.CommentsModel.find().populate('user_id');
    if (!CommentData || CommentData.length == 0) {
      throw new NotFoundException('Comment data not found!');
    }
    return CommentData;
  }
  async findAllByEventAndUser(user_id,event_id): Promise<IComment[]> {
    const comments = await this.CommentsModel.find({ user_id ,event_id});


    if (!comments || comments.length === 0) {
      throw new NotFoundException('Comments not found for the event and user.');
    }
    return comments;
  }
  async getComment(CommentId: string): Promise<IComment> {
    const existingComment = await this.CommentsModel.findById(CommentId).exec();
    if (!existingComment) {
      throw new NotFoundException(`Comment #${CommentId} not found`);
    }
    return existingComment;
  }

  async deleteComment(CommentId: string): Promise<IComment> {
    const deleteComment = await this.CommentsModel.findByIdAndDelete(CommentId);
    if (!deleteComment) {
      throw new NotFoundException('Comment #${CommentId} not found');
    }
    return deleteComment;

  }
  async  findCommentsByEvents(event_id: string):Promise<IComment[]> {
    const CommentsByEvents=await this.CommentsModel.find({event_id});
    return CommentsByEvents
   }
}
