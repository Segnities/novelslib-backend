import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CommentCount {

    @Field(() => Int, {nullable:false})
    replies?: number;

    @Field(() => Int, {nullable:false})
    notifications?: number;
}
