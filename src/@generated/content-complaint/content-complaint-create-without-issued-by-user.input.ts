import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ApprovalStatus } from '../prisma/approval-status.enum';
import { Int } from '@nestjs/graphql';
import { ComplaintReasonCreateNestedOneWithoutContentComplaintsInput } from '../complaint-reason/complaint-reason-create-nested-one-without-content-complaints.input';
import { ComplaintTargetTypeCreateNestedOneWithoutContentComplaintsInput } from '../complaint-target-type/complaint-target-type-create-nested-one-without-content-complaints.input';
import { UserCreateNestedOneWithoutResolvedContentComplaintsInput } from '../user/user-create-nested-one-without-resolved-content-complaints.input';

@InputType()
export class ContentComplaintCreateWithoutIssuedByUserInput {

    @Field(() => ApprovalStatus, {nullable:false})
    status!: keyof typeof ApprovalStatus;

    @Field(() => Int, {nullable:false})
    contentId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    resolvedAt!: Date | string;

    @Field(() => ComplaintReasonCreateNestedOneWithoutContentComplaintsInput, {nullable:false})
    complaintReason!: ComplaintReasonCreateNestedOneWithoutContentComplaintsInput;

    @Field(() => ComplaintTargetTypeCreateNestedOneWithoutContentComplaintsInput, {nullable:false})
    complaintTargetType!: ComplaintTargetTypeCreateNestedOneWithoutContentComplaintsInput;

    @Field(() => UserCreateNestedOneWithoutResolvedContentComplaintsInput, {nullable:false})
    resolvedByUser!: UserCreateNestedOneWithoutResolvedContentComplaintsInput;
}
