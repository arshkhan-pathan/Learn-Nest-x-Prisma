import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { PrismaModule } from './prisma/prisma.module';
import { TodoModule } from './todo/todo.module';



@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      typePaths: ['./**/*.graphql'],
    }),

    PrismaModule,
    TodoModule,

  ],
})
export class AppModule {}
