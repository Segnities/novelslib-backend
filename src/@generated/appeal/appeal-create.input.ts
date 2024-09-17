import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ApprovalStatus } from '../prisma/approval-status.enum';
import { BanCreateNestedManyWithoutAppealInput } from '../ban/ban-create-nested-many-without-appeal.input';
import { AppelaReasonCreateNestedOneWithoutAppealsInput } from '../appela-reason/appela-reason-create-nested-one-without-appeals.input';
import { UserCreateNestedOneWithoutReviewedAppealsInput } from '../user/user-create-nested-one-without-reviewed-appeals.input';

@InputType()
export class AppealCreateInput {

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

    @Field(() => BanCreateNestedManyWithoutAppealInput, {nullable:true})
    bans?: BanCreateNestedManyWithoutAppealInput;

    @Field(() => AppelaReasonCreateNestedOneWithoutAppealsInput, {nullable:false})
    appeal!: AppelaReasonCreateNestedOneWithoutAppealsInput;

    @Field(() => UserCreateNestedOneWithoutReviewedAppealsInput, {nullable:false})
    reviewedByUser!: UserCreateNestedOneWithoutReviewedAppealsInput;
}
