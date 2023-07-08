import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../UI/TabPanel";
import LogOn from "./LogOn";
import SignUp from "./SignUp";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Profile from "./components/Profile";

type AuthProps = {
  isOpen: boolean;
  setIsOpen: Function;
};

const AuthUI: React.FC<AuthProps> = ({ isOpen, setIsOpen }) => {
  const [value, setValue] = React.useState(0);
  const { email} = useSelector((state: RootState) => state.user);
  const [isAuth, setIsAuth] = React.useState(false);

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  React.useEffect(()=>{
    if(email!=="login"){
      setIsAuth(true);
    }else{
      setIsAuth(false);
    }
  },[email])

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogContent>
          <Box sx={{ width: "100%" }}>
            {isAuth ? (
              <Profile/>
            ) : (
              <>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs value={value} onChange={handleChange}>
                    <Tab label={"Войти"} {...a11yProps(0)} />
                    <Tab label="Зарегистрироваться" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <LogOn textBtn={"Войти"} setIsOpen={setIsOpen} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <SignUp
                    textBtn={"Зарегистрироваться"}
                    setIsOpen={setIsOpen}
                  />
                </TabPanel>
              </>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AuthUI;
