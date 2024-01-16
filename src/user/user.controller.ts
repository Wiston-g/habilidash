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
//import { UpdateUserDTO } from './dto/user-update.dto';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  async registerUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    const user = await this.userService.createUser(createUserDTO);
    return res.status(HttpStatus.OK).json({
      message: 'User Successfully Created',
      user: user,
    });
  }

  @Post('/login')
  async loginUser(@Res() res, @Body() wallet: string) {
    const user = await this.userService.findOneUserLogin({ wallet });
    if (!user) throw new NotFoundException('User Does Not Exists');
    return res.status(HttpStatus.OK).json({
      message: 'User Find',
      user: user,
    });
  }

  @Get('/')
  async getUsers(@Res() res) {
    const users = await this.userService.findAllUsers();
    let dataObject: {
      id: string;
      name: string;
      linkURL: string;
      habilities: Array<string>;
    };
    const userData: Array<object> = [];
    users.forEach((user) => {
      dataObject = {
        id: user._id,
        name: user.name,
        linkURL: user.linkURL,
        habilities: user.habilitiesArray,
      };
      userData.push(dataObject);
    });
    return res.status(HttpStatus.OK).json({
      message: 'User List',
      user: userData,
    });
  }

  @Get(':id')
  async getUser(@Res() res, @Param('id') id: string) {
    const user = await this.userService.findOneUser(id);

    const dataObject: {
      id: string;
      name: string;
      linkURL: string;
      habilities: Array<string>;
    } = {
      id: user._id,
      name: user.name,
      linkURL: user.linkURL,
      habilities: user.habilitiesArray,
    };

    if (!user) throw new NotFoundException('User Does Not Exists');
    return res.status(HttpStatus.OK).json({
      message: 'User Find',
      user: dataObject,
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
    @Param('id') id: string,
    @Body() createUserDTO: CreateUserDTO,
    @Res() res,
  ) {
    const user = await this.userService.updateUser(id, createUserDTO);
    return res.status(HttpStatus.OK).json({
      message: 'User Successfully Updated',
      user: user,
    });
  }
}
