import { IsString, IsNotEmpty, IsArray, IsOptional } from 'class-validator';

export class UpdateUserDTO {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly name?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly linkURL?: string;

  @IsNotEmpty()
  @IsArray()
  @IsOptional()
  readonly habilitiesArray?: string[];

  @IsOptional()
  readonly creaedAt?: Date;
}
