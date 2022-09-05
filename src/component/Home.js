import { Button, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import logo from '../assets/image/MyLogo.png'
import landingPage from '../assets/image/newLandingPage.png'
import JohnPauloMoreno_CV from '../assets/file/John Paulo Moreno CV NEW.pdf'


export const Home = () => {
    return (
        <Box sx={{height:'100%'}}>
            <Container>
                <Box pt={3}>
                    <img src={logo} alt="logo" height="45px"/>
                </Box>
                <Grid container  display="flex" justifycontent="center" alignItems="center" pt={5}>
                    <Grid item lg={6}>
                        <Typography fontSize="20px" fontFamily="poppins" color="#242424">Hello I'm</Typography>
                        <Typography fontSize="70px" fontWeight={700} fontFamily="poppins" color="#242424">Paulo Moreno</Typography>
                        <Typography fontFamily="poppins" fontSize="22px"color="#242424">Front-end Developer</Typography>
                        <Button
                            href={JohnPauloMoreno_CV} download="JohnPauloMoreno_CV" target='_blank'
                            sx={{
                                marginTop:'64px',
                                background:'#242424',
                                height:'60px',
                                width:'250px',
                                textTransform:'capitalize',
                                color:'#FFFFFF',
                                fontSize:'16px',
                                borderRadius:'10px',
                                fontFamily:'poppins',
                                '&:hover':{
                                    background:'#242424',
                                }
                            }}
                        >
                            Download CV
                        </Button>
                    </Grid>
                    <Grid item lg={6}>
                        <img src={landingPage} alt="landingPage"/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
