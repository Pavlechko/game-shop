import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, InputLabel, TextField, Button } from '@mui/material';

const LoginFormComponent = () => {
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(e);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Grid container direction="column" justifyContent="flex-start">
        <Typography variant="h6" component="h1">
          Sign in with a Game account
        </Typography>

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

        <Button type="submit" variant="contained">
          Sign In
        </Button>

        <div>
          <span>Don't have a Game account? </span>
          <Link to="/signup">Sign Up</Link>
        </div>
      </Grid>
    </form>
  );
};

export default LoginFormComponent;
