import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @Length(3, 20)
  readonly username?: string;

  @IsOptional()
  @IsString()
  @Length(6, 50)
  readonly password?: string;
}
