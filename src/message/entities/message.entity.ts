export class Message {
  readonly id: number;
  readonly createdAt: Date;
  from: string;
  to: string;
  read: boolean;
  content: string;
}
