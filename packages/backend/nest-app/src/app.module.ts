import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CustomUuidScalar } from 'src/common/scalars/uuid';
import { CompaniesModule } from 'src/companies/companies.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
    UserRoleGuard,
    USER_ROLE_KEY,
} from './common/decorators/user-role.decorator';
import { SectionsModule } from './sections/sections.module';
import { ToursModule } from './tours/tours.module';
import { UsersModule } from './users/users.module';
import { SchedulesModule } from './schedules/schedules.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),

        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 3347,
            username: 'hwasung',
            password: 'hs1024',
            database: 'hs-dokdo',
            entities: [
                __dirname + '/**/entities/*.entity{.ts,.js}',
                __dirname + '/**/entities/**/*.entity{.ts,.js}',
            ],
            synchronize: true,
        }),
        GraphQLModule.forRoot({
            driver: ApolloDriver,
            autoSchemaFile: 'schema.gql',
            resolvers: { UUID: CustomUuidScalar },
        }),
        UsersModule,
        AuthModule,
        CompaniesModule,
        SectionsModule,
        ToursModule,
        SchedulesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
