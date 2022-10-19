import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function UserCard({name,designation,imageUrl}) {
  return (
    <Card className='m-8' style={{width:'300px',position:'relative'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={imageUrl}
          alt="green iguana"
          className='rounded-lg'
        />
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
  );
}
