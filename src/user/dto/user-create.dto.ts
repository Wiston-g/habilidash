import { IsString, IsNotEmpty, IsArray, IsOptional } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly wallet: string;

  @IsString()
  @IsNotEmpty()
  readonly linkURL: string;

  @IsNotEmpty()
  @IsArray()
  readonly habilitiesArray: string[];

  @IsOptional()
  readonly creaedAt?: Date;
}
