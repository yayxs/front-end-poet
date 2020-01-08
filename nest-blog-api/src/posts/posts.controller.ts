import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  index() {
    return [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }];
  }
}
