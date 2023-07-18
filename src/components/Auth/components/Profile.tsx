import React from "react";
import Stack from "@mui/material/Stack";
import { Typography, IconButton, Alert } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../redux/store";
import {exitProfile } from "../../../redux/slices/UserSlice";
import { StatusProcess, clearSubjects } from "../../../redux/slices/SubjectsSlice";
import { clearSubjectsData, clearUserData } from "../../../utils/localUserData";
import { useDispatch } from "react-redux";

const Profile: React.FC = () => {
  const { email } = useSelector((state: RootState) => state.user);
  const appDispatch = useAppDispatch();
  const dispatch = useDispatch();
  const [isErr, setIsErr] = React.useState(false);
  const {statusExit} = useSelector((state:RootState)=>state.user);

  const handleOut = () => {
    appDispatch(exitProfile());
    clearUserData();
    clearSubjectsData();
    dispatch(clearSubjects());
  };

  React.useEffect(()=>{
    switch(statusExit){
      case StatusProcess.EMPTY:
        setIsErr(false);
        break;
      case StatusProcess.ERROR:
        setIsErr(true);
        break;
      case StatusProcess.LOADING:
        setIsErr(false);
        break;
      case StatusProcess.SUCCESS:
        setIsErr(false);
        break;
    }
  },[statusExit])

  return (
    <>
      <Stack spacing={2}>
        <IconButton
          color="inherit"
          onClick={handleOut}
          sx={{ position: "absolute", right: "10px", top: "30px" }}
        >
          <LogoutIcon />
        </IconButton>
        <Typography variant="h5" pr={"30px"}>Профиль</Typography>
        <Typography>profile: {email}</Typography>
        {isErr && (
          <Alert severity="error">
            <Typography variant="body2">
              Не удалось выйти из профиля, попробуйте перезагрузить страницу и
              попробовать еще раз.
            </Typography>
          </Alert>
        )}
      </Stack>
    </>
  );
};

export default Profile;
