import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  InputLabel,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

const RegistrationFormComponent = () => {
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(e);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Grid container direction="column" justifyContent="flex-start">
        <Typography variant="h6" component="h1">
          Sign Up
        </Typography>
        <InputLabel htmlFor="name">Your name</InputLabel>
        <TextField
          type="text"
          name="name"
          label="Name"
          variant="outlined"
          required={true}
          margin="dense"
        />

        <InputLabel htmlFor="email">Your email</InputLabel>
        <TextField
          type="text"
          name="email"
          label="Email"
          variant="outlined"
          required={true}
          margin="dense"
        />

        <InputLabel htmlFor="password">Your password</InputLabel>
        <TextField
          type="password"
          name="password"
          label="Password"
          variant="outlined"
          required={true}
          margin="dense"
        />

        <InputLabel htmlFor="confirmPassword">Confirm your password</InputLabel>
        <TextField
          type="password"
          name="confirmPassword"
          label="Password"
          variant="outlined"
          required={true}
          margin="dense"
        />

        <FormControlLabel
          required
          control={<Checkbox />}
          label="I have read and agree to the Terms of Service"
        />

        <Button type="submit" variant="contained">
          Sign Up
        </Button>

        <div>
          <span>Already have a Game account? </span>
          <Link to="/signin">Sign In</Link>
        </div>
      </Grid>
    </form>
  );
};

export default RegistrationFormComponent;
