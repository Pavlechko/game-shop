export type CreateUserDto = {
  name: string;
  email: string;
  password: string;
};

export type UserDTO = Omit<CreateUserDto, 'name'>;
