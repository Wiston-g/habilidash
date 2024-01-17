import {
  IsEthereumAddress,
  IsNotEmpty,
  IsStrongPassword,
} from 'class-validator';

export class LoginAuthDto {
  @IsNotEmpty()
  @IsEthereumAddress()
  readonly wallet: string;

  @IsStrongPassword()
  @IsNotEmpty()
  readonly password: string;
}
