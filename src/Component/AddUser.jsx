import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
export const AddUser = () => {
  return (
      <Box>
          <Box display="flex" justifyContent="center">
            <Typography>Name</Typography>
          </Box>
          <Box display="flex" justifyContent="center" py={2}>
            <TextField label="Enter Name" variant="outlined" />
          </Box>
          <Box display="flex" justifyContent="center">
            <Box px={1}><Button variant="outlined">Submit</Button></Box>
            <Button  component={Link} to="/" variant="outlined" color="error">Cancel</Button>
          </Box>
      </Box>
  );
};
