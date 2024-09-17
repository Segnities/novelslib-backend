import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ChapterMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    content?: true;

    @Field(() => Boolean, {nullable:true})
    likes?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    novelId?: true;

    @Field(() => Boolean, {nullable:true})
    commendableTypeId?: true;

    @Field(() => Boolean, {nullable:true})
    complaitTypeId?: true;

    @Field(() => Boolean, {nullable:true})
    complaintTargetId?: true;
}
