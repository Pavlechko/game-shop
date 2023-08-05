import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  InputLabel,
  TextField,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

import useInput from '../../../hooks/use-input';
import { validatePasswod } from '../../../utils/validation/validator-length';
import { validateEmail } from '../../../utils/validation/validator-email';
import { LoginUser } from '../../../models/Auth/login-uset.types';

const LoginFormComponent = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const {
    text: email,
    shouldDisplayError: isEmailError,
    errorText: emailErrorText,
    changeTextHendler: emailTextHendler,
    inputFocusHandler: emailFocusHandler,
    inputClearHandler: emailClearHandler,
  } = useInput(validateEmail);

  const {
    text: password,
    shouldDisplayError: isPasswordError,
    errorText: passwordErrorText,
    changeTextHendler: passwordTextHendler,
    inputFocusHandler: passwordFocusHandler,
    inputClearHandler: passwordClearHandler,
  } = useInput(validatePasswod);

  const clearForm = () => {
    emailClearHandler();
    passwordClearHandler();
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginUser: LoginUser = {
      email,
      password,
    };

    console.log('LoginUser', loginUser);
    clearForm();
  };

  const handleClickShowPassword = () =>
    setShowPassword((show: boolean) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Grid container direction="column" justifyContent="flex-start">
        <Typography variant="h6" component="h1">
          Sign in with a Game account
        </Typography>

        <TextField
          type="email"
          name="email"
          label="Email"
          variant="outlined"
          required={true}
          margin="dense"
          value={email}
          onChange={emailTextHendler}
          onBlur={emailFocusHandler}
          error={isEmailError}
          helperText={emailErrorText}
        />

        <FormControl
          variant="outlined"
          required={true}
          margin="dense"
          error={isPasswordError}
        >
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            name="password"
            margin="dense"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={passwordTextHendler}
            onBlur={passwordFocusHandler}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <FormHelperText error={isPasswordError}>
            {passwordErrorText}
          </FormHelperText>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          disabled={isEmailError || isPasswordError}
        >
          Sign In
        </Button>

        <div className="question">
          <span>Don't have a Game account? </span>
          <Link to="/signup">Sign Up</Link>
        </div>
      </Grid>
    </form>
  );
};

export default LoginFormComponent;
