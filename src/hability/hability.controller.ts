import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Put,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { HabilityService } from './hability.service';
import { CreateHabilityDto } from './dto/create-hability.dto';
import { UpdateHabilityDto } from './dto/update-hability.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('hability')
@Controller('hability')
export class HabilityController {
  constructor(private readonly habilityService: HabilityService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Res() res, @Body() createHabilityDto: CreateHabilityDto) {
    try {
      const hability = this.habilityService.create(createHabilityDto);
      return res.status(HttpStatus.CREATED).json({
        message: 'User Successfully Created',
        hability: hability,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: error,
      });
    }
  }

  @Get()
  findAll(@Res() res) {
    try {
      const habilities = this.habilityService.findAll();
      return res.status(HttpStatus.FOUND).json({
        message: 'habilities found',
        hability: habilities,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: error,
      });
    }
  }

  @Get(':id')
  findOne(@Res() res, @Param('id') id: string) {
    try {
      const hability = this.habilityService.findOne(id);
      return res.status(HttpStatus.FOUND).json({
        message: 'hability found',
        hability: hability,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: error,
      });
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateHabilityDto: UpdateHabilityDto,
    @Res() res,
  ) {
    try {
      const hability = this.habilityService.update(id, updateHabilityDto);
      return res.status(HttpStatus.OK).json({
        message: 'hability Successfully Updated',
        hability: hability,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: error,
      });
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Res() res, @Param('id') id: string) {
    try {
      const hability = this.habilityService.remove(id);
      return res.status(HttpStatus.ACCEPTED).json({
        message: 'Hability Successfully Delet',
        hability: hability,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: error,
      });
    }
  }
}
