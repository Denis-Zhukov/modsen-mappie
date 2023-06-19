import { Injectable } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';
import { AuthModel } from './auth.model';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private readonly client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  );

  public async auth(credentials: string) {
    const ticket = await this.client.verifyIdToken({
      idToken: credentials,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const { sub, picture } = ticket.getPayload();

    const [authInstance] = await AuthModel.findOrCreate({
      where: { id: sub }
    });


    await authInstance.save();

    const accessToken = jwt.sign(
      { id: sub, picture },
      process.env.ACCESS_SECRET,
      { expiresIn: process.env.LIFE_ACCESS_TOKEN }
    );

    const refreshToken = jwt.sign(
      { id: sub, picture },
      process.env.REFRESH_SECRET,
      { expiresIn: process.env.LIFE_REFRESH_TOKEN }
    );

    authInstance.set({ refreshToken });

    return [accessToken, refreshToken, picture];
  }

  public async checkAuth(accessToken: string) {
    return jwt.verify(
      accessToken,
      process.env.ACCESS_SECRET
    ) as { picture: string, id: string };
  }

  public async refresh(refreshToken: string) {
    const { id, picture } = jwt.verify(
      refreshToken,
      process.env.REFRESH_SECRET
    ) as { id: string, picture: string };

    return jwt.sign(
      { id, picture },
      process.env.ACCESS_SECRET,
      { expiresIn: process.env.LIFE_ACCESS_TOKEN }
    );
  }

  public async logout(refreshToken: string) {
    const decode = jwt.verify(
      refreshToken,
      process.env.REFRESH_SECRET
    ) as { id: string };

    const instance = await AuthModel.findOne({ where: { id: decode.id } });
    if (instance) await instance.destroy();
  }
}
