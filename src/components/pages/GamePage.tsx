import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const GamePage: React.FC = () => {
  const { timer, gameMode, fullPackage, countCards } = useSelector(
    (state: RootState) => state.settings
  );

  return (
    <>
      <Grid
        container
        sx={{ mt: 2, ml: 2, height: "90vh" }}
        alignItems={"center"}
        spacing={2}
      >
        <Button
          sx={{
            position: "fixed",
            right: "1%",
            left: "1%",
            top: "10%",
            bottom: "1%",
          }}
        />
        <Grid item xs={2}>
          1
        </Grid>
        <Grid item xs={8} sx={{zIndex:1}}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div"></Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2}>
          1
        </Grid>
      </Grid>
    </>
  );
};

export default GamePage;
