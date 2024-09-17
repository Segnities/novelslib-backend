import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserComplaintCreateNestedManyWithoutComplaintTargetTypeInput } from '../user-complaint/user-complaint-create-nested-many-without-complaint-target-type.input';
import { ContentComplaintCreateNestedManyWithoutComplaintTargetTypeInput } from '../content-complaint/content-complaint-create-nested-many-without-complaint-target-type.input';
import { BanCreateNestedManyWithoutComplaintTargetTypeInput } from '../ban/ban-create-nested-many-without-complaint-target-type.input';
import { NovelCreateNestedManyWithoutComplainTargetTypeInput } from '../novel/novel-create-nested-many-without-complain-target-type.input';
import { ReviewCreateNestedManyWithoutComplainTargetTypeInput } from '../review/review-create-nested-many-without-complain-target-type.input';
import { NewsCreateNestedManyWithoutComplainTargetTypeInput } from '../news/news-create-nested-many-without-complain-target-type.input';
import { CommentCreateNestedManyWithoutComplainTargetTypeInput } from '../comment/comment-create-nested-many-without-complain-target-type.input';
import { ChapterCreateNestedManyWithoutComplainTargetTypeInput } from '../chapter/chapter-create-nested-many-without-complain-target-type.input';

@InputType()
export class ComplaintTargetTypeCreateWithoutComplaintCategoryInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => UserComplaintCreateNestedManyWithoutComplaintTargetTypeInput, {nullable:true})
    usersComplaints?: UserComplaintCreateNestedManyWithoutComplaintTargetTypeInput;

    @Field(() => ContentComplaintCreateNestedManyWithoutComplaintTargetTypeInput, {nullable:true})
    contentComplaints?: ContentComplaintCreateNestedManyWithoutComplaintTargetTypeInput;

    @Field(() => BanCreateNestedManyWithoutComplaintTargetTypeInput, {nullable:true})
    bans?: BanCreateNestedManyWithoutComplaintTargetTypeInput;

    @Field(() => NovelCreateNestedManyWithoutComplainTargetTypeInput, {nullable:true})
    novels?: NovelCreateNestedManyWithoutComplainTargetTypeInput;

    @Field(() => ReviewCreateNestedManyWithoutComplainTargetTypeInput, {nullable:true})
    reviews?: ReviewCreateNestedManyWithoutComplainTargetTypeInput;

    @Field(() => NewsCreateNestedManyWithoutComplainTargetTypeInput, {nullable:true})
    news?: NewsCreateNestedManyWithoutComplainTargetTypeInput;

    @Field(() => CommentCreateNestedManyWithoutComplainTargetTypeInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutComplainTargetTypeInput;

    @Field(() => ChapterCreateNestedManyWithoutComplainTargetTypeInput, {nullable:true})
    chapter?: ChapterCreateNestedManyWithoutComplainTargetTypeInput;
}
