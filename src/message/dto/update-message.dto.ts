import { IsOptional, IsString } from 'class-validator';

export class UpdateMessageDto {
  @IsString()
  @IsOptional()
  readonly from?: string;

  @IsString()
  @IsOptional()
  readonly to?: string;

  @IsString()
  @IsOptional()
  readonly content?: string;
}
