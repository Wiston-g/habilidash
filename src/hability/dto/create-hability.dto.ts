import { IsNotEmpty, IsOptional, IsString, IsArray } from 'class-validator';

export class CreateHabilityDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsArray()
  @IsNotEmpty()
  readonly usersArray: string[];

  @IsOptional()
  readonly creaedAt?: Date;
}
