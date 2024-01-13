import { PartialType } from '@nestjs/swagger';
import { CreateHabilityDto } from './create-hability.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateHabilityDto extends PartialType(CreateHabilityDto) {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsOptional()
  readonly creaedAt?: Date;
}
