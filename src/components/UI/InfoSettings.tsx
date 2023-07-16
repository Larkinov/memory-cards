import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const InfoSettings = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        onClick={handleClickOpen}
        sx={{ position: "absolute", zIndex: "1", right: "1vw" }}
      >
        <InfoOutlinedIcon color="primary" />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Информация</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <b>Режим игры «Чтение»</b> - в этом режиме нет этапа запоминания,
            поэтому карточки появляются только для чтения. Также здесь
            отсутствует время для спокойного чтения карточек.
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            <b>Режим игры «Запоминание»</b> - после того, как будут прочитаны
            карточки, начнется этап запоминания - небольшая игра для того чтобы
            вспомнить порядок слов.
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            <b>Режим запоминания «Четыре карты»</b> - в этом режиме вам необходимо из четырех карт выбрать ту, которая шла в порядке очереди.
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            <b>Режим запоминания «Список»</b> - вам будет дан список всех слов и необходимо выбрать их по порядку появления.
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            <b>Количество карточек</b> - можно выбрать весь пакет или какое-то
            определенно количество
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            <b>Случайный порядок</b> - случайный порядок карточек
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            <b>Время</b> - играть со временем или без для этапа чтения. После
            окончания времени начинается этап запоминания
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Продолжить
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InfoSettings;
