import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class ComplaintReasonScalarWhereWithAggregatesInput {

    @Field(() => [ComplaintReasonScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ComplaintReasonScalarWhereWithAggregatesInput>;

    @Field(() => [ComplaintReasonScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ComplaintReasonScalarWhereWithAggregatesInput>;

    @Field(() => [ComplaintReasonScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ComplaintReasonScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    userId?: IntNullableWithAggregatesFilter;
}
