import { CreateUserDTO } from './dto/user-create.dto';
import { UpdateUserDTO } from './dto/user-update.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createPost(res: any, createUserDTO: CreateUserDTO): Promise<any>;
    getUsers(res: any): Promise<any>;
    getUser(res: any, id: string): Promise<any>;
    deleteUser(res: any, id: string): Promise<any>;
    UpdateUser(res: any, id: string, updateUserDTO: UpdateUserDTO): Promise<any>;
}
