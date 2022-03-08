import React from 'react';
import './style.css';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container ';
import Grid from '@mui/material/Grid ';
import Typography from '@mui/material/Typography ';
import InputBase from '@mui/material/InputBase ';
import { pink } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const theme = createTheme({
  palette: {
    primary: {
      main: pink[400],
    },
  },
});
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        sx={{
          bgcolor: 'primary.main',
          minHeight: '100vh',
          py: { xs: 8, md: 0 },
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Container>
          <Grid
            container
            sx={{
              bgcolor: 'white',
              p: 4,
              borderRadius: 1,
              boxShadow: '0 2px 8px 0 rgba(0,0,0,0.4)',
            }}
          >
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <Typography variant="h4" component="h1">
                  Registration
                </Typography>
                <Input label="First Name" placeholder="Name" />
                <Input label="Email" placeholder="Email" />
                <Input label="Phone" placeholder="+2439000000000" />
                <Stack justifyContent="space-between" direction="row">
                  <Button color="primary" variant="contained" sx={{ px: 8 }}>
                    Register
                  </Button>
                  <Button color="primary" sx={{ px: 8 }}>
                    Login
                  </Button>
                </Stack>
                <FormControlLabel
                  label={
                    <Typography component="span">
                      I agree to the terms and conditions of{' '}
                      <Typography
                        component="a"
                        href="htttps://privacylink.com"
                        color="primary.main"
                      >
                        {'Privacy & Policy'}
                      </Typography>
                    </Typography>
                  }
                  control={<Checkbox checked />}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack sx={{ width: 0.75, my: { xs: 8, md: 0 }, mx: 'auto' }}>
                <img src="/image.svg" alt="image" />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </ThemeProvider>
  );
}

const Input = ({ label, placeholder }) => {
  return (
    <Box>
      <Typography color="text.secondary">{label}</Typography>
      <InputBase
        placeholder={placeholder}
        fullWidth
        sx={{ bgcolor: 'action.selected', p: 1 }}
      />
    </Box>
  );
};
