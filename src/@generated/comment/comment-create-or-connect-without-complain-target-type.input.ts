import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutComplainTargetTypeInput } from './comment-create-without-complain-target-type.input';

@InputType()
export class CommentCreateOrConnectWithoutComplainTargetTypeInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentCreateWithoutComplainTargetTypeInput, {nullable:false})
    @Type(() => CommentCreateWithoutComplainTargetTypeInput)
    create!: CommentCreateWithoutComplainTargetTypeInput;
}
