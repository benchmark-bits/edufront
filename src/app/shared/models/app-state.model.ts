import {User} from './user.model';

export interface AppState {
  readonly user: Array<User>;
}
