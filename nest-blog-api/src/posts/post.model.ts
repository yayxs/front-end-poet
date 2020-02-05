import { getModelForClass, prop } from '@hasezoey/typegoose'
export class Post{
    @prop()
    public title?: string;
    @prop()
    public con?: string;
}

export const PostModel = getModelForClass(Post)