import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Receipts } from './entities/receipts.entity';
import { TempService } from './temp.service';
import { Query } from '@nestjs/graphql';
import { GetReceiptInput } from './dto/get-receipt.dto';
import { CreateReceiptInput } from './dto/create-receipt.dto';

@Resolver(() => Receipts)
export class TempResolver {
    constructor(private readonly tempService: TempService) {}

    @Query(() => [Receipts])
    async getAllReceipts() {
        return await this.tempService.getAll();
    }

    @Query(() => Receipts)
    async getOneReceipt(@Args('input') input: GetReceiptInput) {
        return await this.tempService.getOne(input);
    }

    @Mutation(() => Boolean)
    async createReceipt(@Args('input') input: CreateReceiptInput) {
        return await this.tempService.createReceipts(input);
    }
}
