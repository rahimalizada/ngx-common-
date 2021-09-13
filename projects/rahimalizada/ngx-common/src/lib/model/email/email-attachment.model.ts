export interface EmailAttachment {
  filename: string;
  contentType: string;
  data: Buffer;
}
