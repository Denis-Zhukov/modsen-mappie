import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthModel } from './auth.model';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [AuthModel]
})
export class AuthModule {
}
