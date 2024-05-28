import { Module } from '@nestjs/common';
import { AuthentificationService } from './authentification.service';
import { AuthentificationController } from './authentification.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { AccessTokenStrategy } from './strategies/accessToken.strategie';
import { RefreshTokenStrategy } from './strategies/refrechToken.strategie';

@Module({
  imports: [JwtModule.register({}), UsersModule],

  controllers: [AuthentificationController],
  providers: [AuthentificationService, AccessTokenStrategy, RefreshTokenStrategy],
})


export class AuthentificationModule {}
