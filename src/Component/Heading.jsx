import { Button, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

export const Heading = () => {
  return (
      <Box pt={1}>
        <Paper elevation={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
                <Typography>Item List</Typography>
                <Button component={Link} to="/add" variant="contained" size="small">Add User</Button>
            </Box>
        </Paper>
      </Box>
  );
};
