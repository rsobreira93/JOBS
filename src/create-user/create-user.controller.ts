import { MailerService } from '@nestjs-modules/mailer';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './create-user-dto';

@Controller('create-user')
export class CreateUserController {
  constructor(private mailService: MailerService) {}
  @Post('/')
  async createUser(@Body() createUser: CreateUserDTO) {
    await this.mailService.sendMail({
      to: createUser.email,
      from: 'Equipe solamento <solamento@fakemail.com.br>',
      subject: 'Seja bem-vindo(a)!',
      text: `Olá ${createUser.name}, seu cadastro na nossa plataforma foi realizado com sucesso. Seja bem-vindo(a)!. `,
    });
    return createUser;
  }
}
