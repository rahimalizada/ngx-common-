import { ObjectId } from '../mongodb/object-id.model';
import { WithID } from '../with-id.model';
import { WithUpdated } from '../with-updated.model';
import { EmailAddress } from './email-address.model';
import { EmailAttachment } from './email-attachment.model';

export interface Email extends WithID<ObjectId>, WithUpdated {
  id: ObjectId;
  from: EmailAddress;
  to: EmailAddress[];
  cc?: EmailAddress[];
  bcc?: EmailAddress[];
  subject: string;
  text: string;
  html?: string;
  attachments?: EmailAttachment[];
  deliveryReceipt: boolean;
  readReceipt: boolean;
  messageId?: string;
  processed: boolean;
  created: Date;
  notes?: string;
}
