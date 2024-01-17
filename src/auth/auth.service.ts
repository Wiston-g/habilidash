import { HttpException, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash, compare } from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/interfaces/user.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') readonly userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async register(registerAuthDto: RegisterAuthDto): Promise<User> {
    const password = registerAuthDto.password;
    const cryptPassword = await hash(password, 10);
    registerAuthDto = { ...registerAuthDto, password: cryptPassword };
    const newUser = new this.userModel(registerAuthDto);
    await newUser.save();
    return newUser;
  }

  async login(loginAuthDto: LoginAuthDto): Promise<any> {
    const { wallet, password } = loginAuthDto;
    const findUser = await this.userModel.findOne({ wallet });
    if (!findUser) throw new HttpException('USER_NOT_FOUND', 404);

    const checkPassport = await compare(password, findUser.password);
    if (!checkPassport) throw new HttpException('USER_OR_PASSPORT_FAIL', 404);

    const payload = { id: findUser._id, name: findUser.name };
    const token = await this.jwtService.sign(payload);

    const data = {
      user: findUser,
      token: token,
    };

    return data;
  }
}
