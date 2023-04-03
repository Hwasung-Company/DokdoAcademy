import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Section } from './entities/sections.entity';
import {
    UserRoleGuard,
    UserRoles,
} from 'src/common/decorators/user-role.decorator';
import { UseGuards } from '@nestjs/common';
import { UserRole } from '@libs/common/dist/entities/users/users.entity';
import { SectionsService } from './sections.service';
import { CreateSectionInput } from './dto/create-section.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Resolver(() => Section)
@UseGuards(UserRoleGuard)
@UseGuards(JwtAuthGuard)
@UserRoles(UserRole.ADMIN)
export class SectionsResolver {
    constructor(private readonly sectionsService: SectionsService) {}

    @Query(() => [Section])
    async sections() {
        return await this.sectionsService.findAll();
    }

    @Mutation(() => Section)
    async createSection(@Args('input') input: CreateSectionInput) {
        return await this.sectionsService.create(input);
    }

    @Mutation(() => Boolean)
    async deleteSection(@Args('_id') _id: string) {
        return await this.sectionsService.delete(_id);
    }
}
