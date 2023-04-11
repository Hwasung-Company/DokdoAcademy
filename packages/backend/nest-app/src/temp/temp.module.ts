import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receipts } from './entities/receipts.entity';
import { TempResolver } from './temp.resolver';
import { TempService } from './temp.service';

@Module({
    imports: [TypeOrmModule.forFeature([Receipts])],
    controllers: [],
    providers: [TempResolver, TempService],
})
export class TempModule {}
