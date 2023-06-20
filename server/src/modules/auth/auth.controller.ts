import { Body, Controller, Post, Req, Res, UnauthorizedException } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthCheckDto } from './dto/auth-check.dto';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';


@Controller()
export class AuthController {
  public constructor(private readonly authService: AuthService) {
  }

  @Post('/login')
  public async login(@Res() response: Response, @Body() { credentials }: AuthLoginDto) {
    try {
      const [access, refresh, picture] = await this.authService.auth(credentials);
      response.cookie('refresh', `Bearer ${refresh}`, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000
      });

      response.json({ access, picture });
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Post('/check-auth')
  public async checkAuth(@Req() request) {
    if (request.user) return request.user;
    throw new UnauthorizedException();
  }

  @Post('/refresh')
  public async refresh(@Req() request: Request) {
    try {
      const bearerToken = request.cookies['refresh'];
      const refreshToken = bearerToken?.split(' ')?.[1];
      const access = await this.authService.refresh(refreshToken);
      return { access };
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Post('/logout')
  public async logout(@Req() request: Request, @Res() response: Response) {
    const bearerToken = request.cookies['refresh'];
    const refreshToken = bearerToken?.split(' ')?.[1];

    response.cookie('refresh', '', {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 0
    });

    try {
      await this.authService.logout(refreshToken);
    } finally {
      response.json({ success: true });
    }
  }
}
