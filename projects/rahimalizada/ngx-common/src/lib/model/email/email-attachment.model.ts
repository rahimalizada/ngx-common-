export interface EmailAttachment {
  filename: string;
  contentType: string;
  data: Uint8Array;
}
