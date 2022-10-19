import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function UserCard({name,designation,imageUrl}) {

  const IconStyle = {
    height: '40px',
    width: '40px',
  }
  return (
    <div className='userCard flex flex-col'>
    <Card className='m-8' style={{width:'300px',position:'relative'}}>
      <CardActionArea>
        <div style={{position:'relative'}} className='imagebox'>
          <CardMedia
            component="img"
            image={imageUrl}
            alt="green iguana"
            className='profileImg rounded-lg'
          />
          <div className='content'>
            <FacebookIcon className='Icon' style={IconStyle}/>
            <LinkedInIcon className='Icon' style={IconStyle}/>
            <TwitterIcon className='Icon' style={IconStyle}/>
          </div>
          
        </div>

        <CardContent className='p-5 flex flex-col'>
          <Typography className='text-2xl font-bold self-center m-5' style={{fontSize:'large',fontWeight:'700'}}>
            {name}
          </Typography>
          <Typography className='text-md font-semibold self-center'>
            {designation}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
