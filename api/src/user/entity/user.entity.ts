export type User = {
  id?: string;
  name: string;
  email: string;
  hashPassword: string;
};

export type UserWihtoutPass = Omit<User, 'hashPassword'>;
