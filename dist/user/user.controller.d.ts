import { CreateUserDTO } from './dto/user-create.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    registerUser(res: any, createUserDTO: CreateUserDTO): Promise<any>;
    getUsers(res: any): Promise<any>;
    getUser(res: any, id: string): Promise<any>;
    deleteUser(res: any, id: string): Promise<any>;
    UpdateUser(id: string, createUserDTO: CreateUserDTO, res: any): Promise<any>;
}
