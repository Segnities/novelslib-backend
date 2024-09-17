import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ContinueReadingCountAggregate } from './continue-reading-count-aggregate.output';
import { ContinueReadingAvgAggregate } from './continue-reading-avg-aggregate.output';
import { ContinueReadingSumAggregate } from './continue-reading-sum-aggregate.output';
import { ContinueReadingMinAggregate } from './continue-reading-min-aggregate.output';
import { ContinueReadingMaxAggregate } from './continue-reading-max-aggregate.output';

@ObjectType()
export class ContinueReadingGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Float, {nullable:false})
    progressPercentage!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    lastChapterId!: number;

    @Field(() => Int, {nullable:false})
    novelId!: number;

    @Field(() => ContinueReadingCountAggregate, {nullable:true})
    _count?: ContinueReadingCountAggregate;

    @Field(() => ContinueReadingAvgAggregate, {nullable:true})
    _avg?: ContinueReadingAvgAggregate;

    @Field(() => ContinueReadingSumAggregate, {nullable:true})
    _sum?: ContinueReadingSumAggregate;

    @Field(() => ContinueReadingMinAggregate, {nullable:true})
    _min?: ContinueReadingMinAggregate;

    @Field(() => ContinueReadingMaxAggregate, {nullable:true})
    _max?: ContinueReadingMaxAggregate;
}
