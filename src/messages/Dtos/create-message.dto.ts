import { IsAlpha, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsAlpha()
  content: string;
}
