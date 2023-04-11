import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetReceiptInput {
    @Field((type) => String)
    name: string;
    @Field((type) => String)
    item: string;
}
