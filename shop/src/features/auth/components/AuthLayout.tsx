import { ReactNode } from 'react';
import { Grid, Box } from '@mui/material';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      sx={{ p: 2 }}
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <img src="logo_steam.svg" alt="logo Steam" height="40px" />
      <main>
        <Box
          sx={{
            border: 1,
            padding: 2,
            borderColor: '#cccccc',
            width: '350px',
            marginTop: 2,
          }}
        >
          {children}
        </Box>
      </main>
    </Grid>
  );
};

export default AuthLayout;
