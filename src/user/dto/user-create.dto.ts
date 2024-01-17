import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsOptional,
  IsEthereumAddress,
  IsStrongPassword,
  IsUrl,
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

  @IsNotEmpty()
  @IsString()
  @IsUrl(undefined, { message: 'Company URL is not valid.' })
  readonly linkURL: string;

  @IsNotEmpty()
  @IsArray()
  readonly habilitiesArray: string[];

  @IsOptional()
  readonly creaedAt?: Date;
}
