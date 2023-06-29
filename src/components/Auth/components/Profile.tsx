import React from "react";
import Stack from "@mui/material/Stack";
import { Typography, IconButton, Alert } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { clearUser } from "../../../redux/slices/UserSlice";

const Profile: React.FC = () => {
  const { email } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [isErr, setIsErr] = React.useState(false);
  const [errText, setErrText] = React.useState("");

  const handleOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(clearUser());
      })
      .catch((error) => {
        setIsErr(true);
        setErrText("Попробуйте снова");
        setErrText(error.code + error.message);
      });
  };

  return (
    <>
      <Stack spacing={2}>
        <IconButton
          color="inherit"
          onClick={handleOut}
          sx={{ position: "absolute", right: "10px", top:"30px" }}
        >
          <LogoutIcon />
        </IconButton>
        <Typography variant="h5">Профиль</Typography>
        <Typography>email: {email}</Typography>
        {isErr && (
          <Alert severity="error">
            <Typography variant="body2">
              Не удалось выйти из профиля, попробуйте снова.
            </Typography>
            <Typography variant="body2">({errText})</Typography>
          </Alert>
        )}
      </Stack>
    </>
  );
};

export default Profile;
