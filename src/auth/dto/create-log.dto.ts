import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateLogDto {

 @IsEmail()
 @IsNotEmpty({
   message: 'Email ou senha incorretos',
 })
 email: string;

 @IsNotEmpty({
   message: 'Email ou senha incorretos',
 })
 password: string;
}
