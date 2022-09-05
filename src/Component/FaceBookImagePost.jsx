import React from 'react'
import {Avatar, Box, Card, Container, ListItem, ListItemAvatar, ListItemText, Typography} from '@mui/material'
import { makeStyles } from '@mui/styles';
import FbImageLibrary from 'react-fb-image-grid'
import {MoreHoriz } from '@mui/icons-material';
import one from '../Assets/Image//Image1.jpg'
import two from '../Assets/Image/Image2.jpg'
import three from '../Assets/Image/Image3.jpg'
import four from '../Assets/Image/Image4.jpg'
import five from '../Assets/Image/Image5.jpg'

const images = [one, two, three, four, five]
console.log(images);
const useStyles = makeStyles({
  sample:{
    height:'300px',
    position:'relative'
  }
})
const FaceBookImagePost = () => {
  const styles = useStyles()
  return (
    <Box sx={{fontFamily: 'Poppins' , display: 'flex', justifyContent: 'center'}}>
      <Container maxWidth={'sm'}>
          <Box border="1px solid #E7ECF2" borderRadius="5px" mt={10}>
          <ListItem secondaryAction={<MoreHoriz/>}>
            <ListItemAvatar>
              <Avatar variant="rounded" src={four} alt="four" />
            </ListItemAvatar>
            <ListItemText 
              primary={<Typography sx={{fontSize:'16px',fontFamily: 'Poppins'}}>Paulo Moreno</Typography>} 
              secondary={<Typography sx={{fontSize:'12px', fontFamily: 'Poppins'}}>Feb, 14 2022</Typography>} 
            />

          </ListItem>
            <FbImageLibrary images={images} countFrom={3} hideOverlay={true} className={styles.sample} />
          </Box>
      </Container>
    </Box>
  )
}

export default FaceBookImagePost