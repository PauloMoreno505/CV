import React, { useContext } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';

export const UserList = () => {
    const { users, setUsers } = useContext(GlobalContext);
    
    const handleCheck = (id) => {
        let userData = users
        console.log(userData);
        let userID = []
        console.log(userID);
        userID = userData.splice(id, 1)
        setUsers(userData)
    }
  return (
     <Box>
         {users.map(user => (
            <Box mt={2}>
            <Paper variant="outlined">
                <Box display="flex" justifyContent="space-between" alignContent="center" p={2}>
                    <Box>
                        <Typography>{user.name}</Typography>
                    </Box>
                    <Box display="flex">
                        <Box px={1}><Button variant="outlined" component={Link} to={`/edit/${user.id}`}>edit</Button></Box>
                        <Button variant="outlined" color="error" onClick={() => handleCheck(users.id)}>delete</Button>
                    </Box>
                </Box>
            </Paper>
            </Box>
         ))}
     </Box>
  );
};
