import { IsString } from 'class-validator';

export class MessageDTO {
  @IsString({ message: 'id es string requerido' })
  id: string;

  @IsString({ message: 'message es string requerido' })
  message: string;
}
