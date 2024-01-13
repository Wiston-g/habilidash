import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateHabilityDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsOptional()
  readonly creaedAt?: Date;
}
