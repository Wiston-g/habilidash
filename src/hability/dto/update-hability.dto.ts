import { PartialType } from '@nestjs/swagger';
import { CreateHabilityDto } from './create-hability.dto';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateHabilityDto extends PartialType(CreateHabilityDto) {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsArray()
  @IsNotEmpty()
  @IsOptional()
  readonly usersArray?: string[];

  @IsOptional()
  readonly creaedAt?: Date;
}
