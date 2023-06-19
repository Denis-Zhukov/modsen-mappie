import { IsString } from 'class-validator';


export class AuthLoginDto {
  @IsString()
  credentials: string;
}