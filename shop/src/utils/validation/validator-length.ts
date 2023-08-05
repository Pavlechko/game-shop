import { LengthOption, Validation } from '../../models/validation.types';

const isValidLength: Validation = (text: string, option?: LengthOption) => {
  const textLength = text.length;
  if (textLength === 0) {
    return { isValid: false };
  }
  if (option?.min && textLength < option.min) {
    return { isValid: false, helperText: 'Too short' };
  }
  if (option?.max && textLength > option.max) {
    return { isValid: false, helperText: 'Too long' };
  }
  return { isValid: true };
};

export const validatePasswod: Validation = (password: string) => {
  return isValidLength(password, { min: 6, max: 18 });
};

export const validateName: Validation = (name: string) => {
  return isValidLength(name, { min: 2, max: 32 });
};
