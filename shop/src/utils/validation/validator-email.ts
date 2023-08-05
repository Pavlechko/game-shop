import { Validation } from '../../models/validation.types';

export const validateEmail: Validation = (email: string) => {
  if (email.length === 0) {
    return { isValid: false };
  }

  const RFC2822 =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  const isValid = RFC2822.test(email.trim());

  if (isValid) {
    return { isValid: isValid };
  } else {
    return { isValid: false, helperText: 'Invalid email' };
  }
};
