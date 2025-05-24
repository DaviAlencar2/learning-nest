export class Message {
  id: number;
  createdAt: Date;
  from: string;
  to: string;
  read: boolean;
  content: string;
}

export class CreateMessageDto {
  from: string;
  to: string;
  content: string;
}

export class UpdateMessageDto {
  from?: string;
  to?: string;
  content?: string;
}
