import { NewUser } from './new-user.types';

export type LoginUser = Omit<NewUser, 'name'>;
