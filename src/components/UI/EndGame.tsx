import React from "react";
import { Button, Grid, Stack } from "@mui/material";
import { Link } from "react-router-dom";

type EndGameProps = {
    restart:boolean,
    setRestart:Function,
}

const EndGame:React.FC<EndGameProps> = ({restart,setRestart}) => {
  return (
    <>
      <Grid item xs={12}>
        <Stack spacing={2} alignItems={"center"} sx={{ mb: "10%" }}>
          <Button
            variant="outlined"
            sx={{ width: "20vw" }}
            onClick={() => setRestart(!restart)}
          >
            Начать сначала
          </Button>
          <Button variant="outlined" sx={{ width: "20vw" }}>
            <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
              Главное меню
            </Link>
          </Button>
        </Stack>
      </Grid>
    </>
  );
};

export default EndGame;
