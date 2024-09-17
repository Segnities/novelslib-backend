import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ReviewSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    likes?: true;

    @Field(() => Boolean, {nullable:true})
    views?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    novelId?: true;

    @Field(() => Boolean, {nullable:true})
    commendableTypeId?: true;

    @Field(() => Boolean, {nullable:true})
    complaintTargetId?: true;
}
