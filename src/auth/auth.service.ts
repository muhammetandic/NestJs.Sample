import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) { }
  
  async validateUser(credentials: LoginDto): Promise<any> {
    const { username, password} = credentials;
    const user = await this.usersService.findOne(username);
    if (user && user.password === password) {
      const {password, ...result} = user;
      return result;
    }
    return null;
  }
}
