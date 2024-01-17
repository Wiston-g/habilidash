import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    RegisterUser(registerAuthDto: RegisterAuthDto): Promise<import("../user/interfaces/user.interface").User>;
    loginUser(loginAuthDto: LoginAuthDto): Promise<any>;
}
