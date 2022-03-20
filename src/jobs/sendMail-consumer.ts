import { MailerService } from '@nestjs-modules/mailer';
import { CreateUserDTO } from 'src/create-user/create-user-dto';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('sendMail-queue')
class SendMailConsumer {
  constructor(private mailService: MailerService) {}

  @Process('sendMail-job')
  async sendMailJob(job: Job<CreateUserDTO>) {
    const { data } = job;

    await this.mailService.sendMail({
      to: data.email,
      from: 'Equipe solamento <solamento@fakemail.com>',
      subject: 'Seja bem-vindo(a)!.',
      text: `Olá ${data.name}, seu cadastro foi realizado com sucesso. Seja bem-vindo(a)!. `,
    });
  }
}

export { SendMailConsumer };
