import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert/Alert";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { IUser, setUser } from "../../redux/slices/UserSlice";
import EmailUI from "./components/EmailUI";
import PasswordUI from "./components/PasswordUI";
import { Typography } from "@mui/material";
type SignUpProps = {
  textBtn: string;
  setIsOpen:Function;
};

const SignUp: React.FC<SignUpProps> = ({ textBtn, setIsOpen }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [isErr, setIsErr] = React.useState(false);
  const [errText, setErrText] = React.useState("");

  const onClickAuth = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        console.log(user);
        user.getIdToken().then((res) => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: res,
            } as IUser)
          );
        });
        setIsOpen(false);
      })
      .catch((error) => {
        setIsErr(true);
        setErrText("Попробуйте снова");
        setErrText(error.code + "\n" + error.message);
      });
  };

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
            <Typography variant="body2">({errText})</Typography>
          </Alert>
        )}
      </Stack>
    </>
  );
};

export default SignUp;
