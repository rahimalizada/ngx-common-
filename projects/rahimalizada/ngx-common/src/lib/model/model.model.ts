import { WithBranch } from './with-branch.model';
import { WithID } from './with-id.model';

export interface Model<S, T> extends WithID<S>, WithBranch<T> {
  id: S;
  created: Date;
  updated: Date;
  createdBy: string;
  updatedBy: string;
  notes?: string;
}
