import React from 'react';
import './CustomCard.css';

//MUI
import { Card, Avatar, Typography } from '@material-ui/core';

function CustomCard({ img, title, body }) {
  return (
    <Card className="card">
      <Avatar src={img} className="card__avatar"></Avatar>
      <Typography className="card__title" variant="h6">
        {title}
      </Typography>
      <Typography className="card__body" variant="body2">
        {body}
      </Typography>
    </Card>
  );
}

export default CustomCard;
