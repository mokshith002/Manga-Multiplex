import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, ButtonBase } from '@mui/material';
import { shadows } from "@mui/system";
import "./Cards.css";

export default function MovieCard(props) {

  const {name, plot, poster, id, handleClick} = props;



  return (
    
      <Card sx={{ maxWidth: 250, boxShawdow: 5 }} className="_movie-card">
        <ButtonBase onClick={() => {handleClick(id)}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={poster}
              alt="green iguana"
              width="100%"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </ButtonBase>
      </Card>
    
  );
}
