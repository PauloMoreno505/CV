import { Box, Container } from '@mui/material';
import React from 'react';
import { UserList } from './UserList'
import { Heading } from './Heading'

export const Home = () => {
  
  return (
    <Box>
          <Container maxWidth="md">
            <Heading/>
            <UserList/>
          </Container>
    </Box>
  );
};
