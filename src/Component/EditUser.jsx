import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

export const EditUser = () => {
  return (
    <Box>
         <Box display="flex" justifyContent="center">
            <Typography>Name</Typography>
          </Box>
          <Box display="flex" justifyContent="center" py={2}>
            <TextField label="Enter Name" variant="outlined" />
          </Box>
          <Box display="flex" justifyContent="center">
            <Box px={1}><Button variant="outlined">edit name</Button></Box>
            <Button  component={Link} to="/" variant="outlined" color="error">Cancel</Button>
          </Box>
    </Box>
  );
};

