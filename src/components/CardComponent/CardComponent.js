import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function CardComponent() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1501829385782-9841539fa6bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          alt="red car"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Vintage
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fotografiada el 22 de enero.
          </Typography>
        </CardContent>
        
      </CardActionArea>
    </Card>
  );
}



