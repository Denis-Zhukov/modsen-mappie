import { IsString } from 'class-validator';

export class AuthCheckDto {
  @IsString()
  accessToken: string;
}