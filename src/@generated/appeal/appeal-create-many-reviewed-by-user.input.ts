import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ApprovalStatus } from '../prisma/approval-status.enum';

@InputType()
export class AppealCreateManyReviewedByUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    reviewedAt!: Date | string;

    @Field(() => ApprovalStatus, {nullable:false})
    status!: keyof typeof ApprovalStatus;

    @Field(() => Int, {nullable:false})
    appealReasonId!: number;
}
