interface IMailsSendMail {
  to: string;
  from: string;
  subject: string;
  content: string;
}

interface IMailsMail extends IMailsSendMail {
  id: string;
  createdAt: string;
  read: boolean;
  folder: string;
}

interface IMailsFolder {
  id: string;
  name: string;
  require: boolean;
  position: number;
}
