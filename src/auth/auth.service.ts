import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/user.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  
  async validateUser(credentials: LoginDto): Promise<any> {
    const { username, password } = credentials;
    const user = await this.userService.findOne(username);
    if (user && user.password === password) {
      const {password, ...result} = user;
      return result;
    }
    return null;
  }
  
    async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
