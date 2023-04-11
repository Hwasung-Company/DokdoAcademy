import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Receipts } from './entities/receipts.entity';
import { Repository } from 'typeorm';
import { CreateReceiptInput } from './dto/create-receipt.dto';
import { GetReceiptInput } from './dto/get-receipt.dto';

@Injectable()
export class TempService {
    constructor(
        @InjectRepository(Receipts)
        private readonly receipts: Repository<Receipts>,
    ) {}

    async createReceipts(input: CreateReceiptInput): Promise<boolean> {
        try {
            const existingReceipt = await this.receipts.findOne({
                where: { name: input.name, item: input.item },
            });
            if (existingReceipt) {
                await this.receipts.delete(existingReceipt._id);
            }
            await this.receipts.save(this.receipts.create(input));
            return true;
        } catch (error) {
            return false;
        }
    }

    async getAll(): Promise<Receipts[]> {
        return await this.receipts.find();
    }

    async getOne(input: GetReceiptInput): Promise<Receipts> {
        return await this.receipts.findOne({
            where: {
                name: input.name,
                item: input.item,
            },
        });
    }
}
