import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert/Alert";
import {signUp } from "../../redux/slices/UserSlice";
import EmailUI from "./components/EmailUI";
import PasswordUI from "./components/PasswordUI";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { StatusProcess } from "../../redux/slices/SubjectsSlice";
import { setUserData } from "../../utils/localUserData";
type SignUpProps = {
  textBtn: string;
  setIsOpen: Function;
};

const SignUp: React.FC<SignUpProps> = ({ textBtn, setIsOpen }) => {
  const appDispatch = useAppDispatch();
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [isErr, setIsErr] = React.useState(false);
  const {statusSignUp,id} = useSelector((state:RootState)=>state.user);

  const onClickAuth = () => {
    appDispatch(signUp({email:email,pass:pass}));
  };

  React.useEffect(()=>{
    switch(statusSignUp){
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
        setUserData(id,email);
        setIsOpen(false);
        setIsErr(false);
        break;
    }
  },[statusSignUp])

  return (
    <>
      <Stack spacing={3} mt={"10px"}>
        <EmailUI email={email} setEmail={setEmail} />
        <PasswordUI pass={pass} setPass={setPass} />
        <Button variant="contained" onClick={() => onClickAuth()}>
          {textBtn}
        </Button>
        {isErr && (
          <Alert severity="error">
            <Typography variant="body2">
              {textBtn} не получилось. Попробуйте снова.
            </Typography>
          </Alert>
        )}
      </Stack>
    </>
  );
};

export default SignUp;
