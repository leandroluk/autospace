import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {GraphQLModule} from '@nestjs/graphql';
import {JwtModule, JwtSignOptions} from '@nestjs/jwt';
import {join} from 'path';
import {PrismaModule} from './common/prisma/prisma.module';
import {UsersModule} from './models/users/users.module';
import {vars} from './vars';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      privateKey: vars.jwt.privateKey,
      publicKey: vars.jwt.publicKey,
      signOptions: {
        expiresIn: vars.jwt.maxAge,
        algorithm: vars.jwt.algorithm as JwtSignOptions['algorithm'],
      },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      introspection: true,
      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {numberScalarMode: 'integer'},
    }),
    PrismaModule,
    UsersModule,
  ],
})
export class AppModule {}
