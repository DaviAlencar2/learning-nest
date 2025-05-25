import { IsString } from 'class-validator';

export class UpdateMessageDto {
  @IsString()
  readonly from?: string;
  @IsString()
  readonly to?: string;
  @IsString()
  readonly content?: string;
}
