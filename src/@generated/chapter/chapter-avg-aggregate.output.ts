import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ChapterAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    likes?: number;

    @Field(() => Float, {nullable:true})
    novelId?: number;

    @Field(() => Float, {nullable:true})
    commendableTypeId?: number;

    @Field(() => Float, {nullable:true})
    complaitTypeId?: number;

    @Field(() => Float, {nullable:true})
    complaintTargetId?: number;
}
