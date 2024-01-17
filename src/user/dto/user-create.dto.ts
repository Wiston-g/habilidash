import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsOptional,
  IsEthereumAddress,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsEthereumAddress()
  readonly wallet: string;

  @IsStrongPassword()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly linkURL: string;

  @IsNotEmpty()
  @IsArray()
  readonly habilitiesArray: string[];

  @IsOptional()
  readonly creaedAt?: Date;
}
