import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/user-create.dto';
import { UpdateUserDTO } from './dto/user-update.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/create')
  async createPost(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    const user = await this.userService.createUser(createUserDTO);
    return res.status(HttpStatus.OK).json({
      message: 'User Successfully Created',
      user: user,
    });
  }

  @Get('/')
  async getUsers(@Res() res) {
    const users = await this.userService.findAllUsers();
    return res.status(HttpStatus.OK).json({
      message: 'User List',
      user: users,
    });
  }

  @Get(':id')
  async getUser(@Res() res, @Param('id') id: string) {
    const user = await this.userService.findOneUser(id);

    if (!user) throw new NotFoundException('User Does Not Exists');
    return res.status(HttpStatus.OK).json({
      message: 'User Find',
      user: user,
    });
  }

  @Delete(':id')
  async deleteUser(@Res() res, @Param('id') id: string) {
    const user = await this.userService.deleteUser(id);

    if (!user) throw new NotFoundException('User Does Not Exists');

    return res.status(HttpStatus.OK).json({
      message: 'User Deleted Success',
      user: user,
    });
  }

  @Put(':id')
  async UpdateUser(
    @Res() res,
    @Param('id') id: string,
    @Body() updateUserDTO: UpdateUserDTO,
  ) {
    console.log(updateUserDTO);

    const user = await this.userService.updateUser(id, updateUserDTO);
    return res.status(HttpStatus.OK).json({
      message: 'User Successfully Updated',
      user: user,
    });
  }
}
