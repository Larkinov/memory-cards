import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const BasicCard = () => {
  return (
    <Card sx={{height:"20vh"}}>
      <CardContent>
        <Typography variant="h5" component="div">
          Title
        </Typography>
        <Typography variant="body1" component="div">
          DescriptionDescription DescriptionDescription Description Description Description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Читать дальше</Button>
      </CardActions>
    </Card>
  );
};

export default BasicCard;
