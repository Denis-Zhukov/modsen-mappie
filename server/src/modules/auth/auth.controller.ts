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

      response.cookie('refresh', refresh, {
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
  public async checkAuth(@Body() { accessToken }: AuthCheckDto) {
    try {
      const { id, picture } = await this.authService.checkAuth(accessToken);
      return { id, picture };
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Post('/refresh')
  public async refresh(@Req() request: Request) {
    try {
      const refreshToken = request.cookies['refresh'];
      const access = await this.authService.refresh(refreshToken);

      return { access };
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Post('/logout')
  public async logout(@Req() request: Request, @Res() response: Response) {
    const refreshToken = request.cookies['refresh'];

    response.cookie('refresh', '', {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 0
    });

    try {
      await this.authService.logout(refreshToken);
    } finally {
      return { success: true };
    }
  }
}
