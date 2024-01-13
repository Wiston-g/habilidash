import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsOptional,
  IsEthereumAddress,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsEthereumAddress()
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
