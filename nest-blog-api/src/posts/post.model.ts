import {  prop } from '@typegoose/typegoose'
import { IsString } from "class-validator";
export class Post{
    @IsString()
    @prop()
    public title?: string;
    @IsString()
    @prop()
    public con?: string;
}

// export const PostModel = getModelForClass(Post)