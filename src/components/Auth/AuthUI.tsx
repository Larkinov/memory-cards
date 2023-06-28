import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../Tabs/TabPanel";
import Form from "./Form";

type AuthProps = {
  isOpen: boolean;
  setIsOpen: Function;
};

const AuthUI: React.FC<AuthProps> = ({ isOpen, setIsOpen }) => {
  const [value, setValue] = React.useState(0);

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


  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogContent>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChange}>
                <Tab label={"Войти"} {...a11yProps(0)} />
                <Tab label="Зарегистрироваться" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Form textBtn={"Войти"}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Form textBtn={"Зарегистрироваться"}/>
            </TabPanel>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AuthUI;
