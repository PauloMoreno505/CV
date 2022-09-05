import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"

const PrimaryNav = () => {
    return (
        <Box>
            <AppBar position="static" sx={{height:'56px'}}>
                <Toolbar variant="dense" sx={{display:'flex', justifyContent:'flex-end'}}>
                    <Button variant="inherit" sx={{textTransform:'capitalize', fontWeight:'bold'}} >My Personal</Button>
                    <Button variant="inherit" sx={{textTransform:'capitalize', color:'#C6DFFB'}} >My Business</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default PrimaryNav