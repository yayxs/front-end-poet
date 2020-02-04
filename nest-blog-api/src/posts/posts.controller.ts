import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';

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
    index(){
        return [
            {
                "id":1,
                "con":"121212"
            }
        ]
    }
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
}
