import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { logOn} from "../../redux/slices/UserSlice";
import EmailUI from "./components/EmailUI";
import PasswordUI from "./components/PasswordUI";
import { Alert, Typography } from "@mui/material";
import { RootState, useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { StatusProcess } from "../../redux/slices/SubjectsSlice";

type LogOnProps = {
  textBtn: string;
  setIsOpen: Function;
};

const LogOn: React.FC<LogOnProps> = ({ textBtn, setIsOpen }) => {
  const appDispatch = useAppDispatch();

  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [isErr, setIsErr] = React.useState(false);
  const {statusLogOn} = useSelector((state:RootState)=>state.user);
  const onClickAuth = () => {
    appDispatch(logOn({email:email,pass:pass}));
  };

  React.useEffect(()=>{
    switch(statusLogOn){
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
        setIsOpen(false);
        setIsErr(false);
        break;
    }
  },[statusLogOn])

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

export default LogOn;
