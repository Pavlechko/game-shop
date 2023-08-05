import { RegisterForm } from './register-form.types';

export type NewUser = Omit<RegisterForm, 'confirmPassword'>;
