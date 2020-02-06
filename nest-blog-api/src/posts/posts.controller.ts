import { Controller, Get, Post, Body, Delete, Put, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { InjectModel } from 'nestjs-typegoose';
import { Post as PostSchema } from './post.model'
import { ModelType } from '@typegoose/typegoose/lib/types';
class CreatePostDto {
    @ApiProperty({
        description: '帖子标题',
        example: "XXXXXXX"
    })
    @IsNotEmpty({ message: "标题不能够是空" })
    title: string
    @ApiProperty({
        description: '帖子内容',
        example: "OOOOOO"
    })
    con: string
}


@Controller('posts')
@ApiTags('博客贴')
export class PostsController {
    constructor(@InjectModel(PostSchema) private readonly postModel: ModelType<PostSchema>) { }

    @ApiOperation({
        summary: '获取帖子列表'
    })
    @Get()
    async index() {
        return await this.postModel.find()
    }
    // 帖子详情
    @ApiOperation({
        summary: '帖子 详情'
    })
    @Get(':id')
    async detail(@Param('id') id: string) {

        return await this.postModel.findById(id)

    }
    // 创建帖子
    @ApiOperation({
        summary: '创建帖子'
    })
    @Post()
    async   createPost(@Body() createPostDto: CreatePostDto) {
        await this.postModel.create(createPostDto)
        return {
            code: 0,
            success: true
        }
    }
    // 更新帖子
    @ApiOperation({
        summary: '更新帖子'
    })
    @Put(':id')
    async update(@Param('id') id: string, @Body() updatePostDto: CreatePostDto) {
        await this.postModel.findByIdAndUpdate(id, updatePostDto)
        return {
            success: true,
            id: id
        }
    }
    // 删除帖子
    @ApiOperation({
        summary: '删除帖子'
    })
    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.postModel.findByIdAndDelete(id)
        return {
            success: true,
            msg: '删除成功'
        }
    }
}
