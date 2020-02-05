import { Controller, Get, Post, Body, Delete, Put, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { PostModel } from './post.model';

// 
class CreatePostDto{
    @ApiProperty({
        description:'帖子标题'
    })
    title:string
    @ApiProperty({
        description:'帖子内容'
    })
    con:string
}


@Controller('posts')
@ApiTags('博客贴')
export class PostsController {
    @ApiOperation({
        summary: '获取帖子列表' 
    })
    @Get()
    async index(){
        return await PostModel.find()
    }
    // 帖子详情
    @ApiOperation({
        summary:'帖子 详情'
    })
    @Get(':id')
    detail(@Param('id') id:string){
        return {
            code:0,
            msg:''
        }
    }
    // 创建帖子
    @ApiOperation({
        summary:'创建帖子'
    })
    @Post()
    createPost(@Body()  body:CreatePostDto){

        return {
            code :0,
            success:true
        }
    }
    // 更新帖子
    @ApiOperation({
        summary:'更新帖子'
    })
    @Put(':id')
    update(@Param('id') id:string, @Body() body:CreatePostDto){
        return {
            success:true,
            id:id
        }
    }
    // 删除帖子
    @ApiOperation({
        summary:'删除帖子'
    })
    @Delete()
    remove(){
        return {
            success:true,
            msg:'删除成功'
        }
    }
}
