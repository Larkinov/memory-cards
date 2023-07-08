import React from "react";
import Alert from "@mui/material/Alert";

const NotAuth: React.FC = () => {


  const [visible, setVisible] = React.useState(true);


  React.useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, []);

  return (
    <>
    {visible && (<Alert severity="info" sx={{position:"absolute", bottom:"0", mb:"10px", ml:"15px"}}>
        Пока вы не зарегистрированы, пакеты<strong> не будут сохраняться!</strong>
      </Alert>)}
      
    </>
  );
};

export default NotAuth;
