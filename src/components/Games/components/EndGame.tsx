import React from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

type EndGameProps = {
  restart: boolean;
  setRestart: Function;
};

const EndGame: React.FC<EndGameProps> = ({ restart, setRestart }) => {

  const {victory} = useSelector((state:RootState)=>state.game);
  return (
    <>
      <Grid item xs={12}>
        <Typography
          position={"absolute"}
          sx={{
            top: "150px",
            m: "0 30%",
            textAlign: "center",
          }}
          variant="h4"
          color={victory ? "green" : "red"}
        >
          {victory ? "          Вы успешно прошли уровень!" : "Вы проиграли! Попробуйте снова" }
        </Typography>
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
