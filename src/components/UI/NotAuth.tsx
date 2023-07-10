import React from "react";
import Alert from "@mui/material/Alert";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const NotAuth: React.FC = () => {
  const [visible, setVisible] = React.useState(true);
  const { id } = useSelector((state: RootState) => state.user);

  React.useEffect(() => {
    if (id) {
      setVisible(false);
    } else {
      setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  }, []);

  return (
    <>
      {visible && (
        <Alert
          severity="info"
          sx={{ position: "absolute", bottom: "0", mb: "10px", ml: "15px" }}
        >
          Пока вы не зарегистрированы, пакеты
          <strong> не будут сохраняться!</strong>
        </Alert>
      )}
    </>
  );
};

export default NotAuth;
