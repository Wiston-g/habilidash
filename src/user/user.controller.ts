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
  UseGuards,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/user-create.dto';
import { UpdateUserDTO } from './dto/user-update.dto';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Post('')
  async registerUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    try {
      const user = await this.userService.createUser(createUserDTO);
      return res.status(HttpStatus.OK).json({
        message: 'User Successfully Created',
        user: user,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: error,
      });
    }
  }

  @Get('/')
  async getUsers(@Res() res) {
    try {
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
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: error,
      });
    }
  }

  @Get(':id')
  async getUser(@Res() res, @Param('id') id: string) {
    try {
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
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: error,
      });
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteUser(@Res() res, @Param('id') id: string) {
    try {
      const user = await this.userService.deleteUser(id);
      if (!user) throw new NotFoundException('User Does Not Exists');
      return res.status(HttpStatus.OK).json({
        message: 'User Deleted Success',
        user: user,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: error,
      });
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async UpdateUser(
    @Param('id') id: string,
    @Body() updateUserDTO: UpdateUserDTO,
    @Res() res,
  ) {
    try {
      const user = await this.userService.updateUser(id, updateUserDTO);
      return res.status(HttpStatus.OK).json({
        message: 'User Successfully Updated',
        user: user,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: error,
      });
    }
  }
}
