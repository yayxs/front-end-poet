import { Controller, Get, Post } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  index() {
    return [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }];
  }
  @Post()
  create() {
    return {
      success: true
    };
  }
  @Get(':id')
  getPostById() {
    return {
      id: 1,
      con: 'hahahhh'
    };
  }
}
