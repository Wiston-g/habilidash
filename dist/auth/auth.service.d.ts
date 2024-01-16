import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
export declare class AuthService {
    registerUser(registerAuthDto: RegisterAuthDto): RegisterAuthDto;
    create(registerAuthDto: RegisterAuthDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, loginAuthDto: LoginAuthDto): string;
    remove(id: number): string;
}
