import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Res, HttpStatus } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}
 
    

    @Post()
    createComment(@Body() createCommentDto: CreateCommentDto) {
      return this.commentsService.createComment(createCommentDto);
    }

    @Get()
    async findAll(@Res() response) {
      try {
        const commentsData = await this.commentsService.getAllComment()
        return response.status(HttpStatus.OK).json({
          message: "Comments Data found successfully",
          status: HttpStatus.OK,
          data: commentsData
        })
  
      } catch (error) {
        return response.status(HttpStatus.BAD_REQUEST).json({
          message: error.message,
          status: HttpStatus.BAD_REQUEST,
          data: null
        })
  
      }
  
    }

    @Get(':id')
      getComment(@Param('id') id: string) {
        return this.commentsService.getComment(id);
      }

    @Put(':id')
      updateComment(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
        return this.commentsService.updateComment(id, updateCommentDto);
      }

    @Delete(':id')
      deleteComment(@Param('id') id: string) {
        return this.commentsService.deleteComment(id);
      }

 }
