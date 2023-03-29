import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Section } from './entities/sections.entity';
import { SectionsResolver } from './sections.resolver';
import { SectionsService } from './sections.service';

@Module({
    imports: [TypeOrmModule.forFeature([Section])],
    controllers: [],
    providers: [SectionsService, SectionsResolver],
    exports: [],
})
export class SectionsModule {}
