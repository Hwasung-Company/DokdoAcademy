import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateReceiptInput {
    @Field((type) => String)
    name: string;
    @Field((type) => String)
    item: string;
    @Field((type) => Number)
    price: number;
    @Field((type) => Number)
    count: number;
    @Field((type) => Number)
    total: number;
    @Field((type) => Date)
    date: Date;
    @Field((type) => String)
    image: string;
}
