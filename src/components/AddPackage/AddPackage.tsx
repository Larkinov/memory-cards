import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputPackageName from "./InputPackageName";
import TypePackage from "./TypePackage";
import ListCards from "./ListCards";
import { useDispatch } from "react-redux";
import { Card } from "../../redux/slices/PackageSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Transition from "./Transition";

type AddPackageProps = {
  isOpen: boolean;
  setOpen: Function;
};

const AddPackage: React.FC<AddPackageProps> = ({ isOpen, setOpen }) => {
  const dispatch = useDispatch();
  const cards:Card[] = useSelector((state:RootState)=>state.package.cards);
  const lastCards = React.useRef();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose}
       fullScreen
       TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6"> Добавление нового пакета</Typography>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <FormControl>
            <InputPackageName />
            <TypePackage />
            <ListCards />
          </FormControl>
          <DialogActions sx={{display:"flex", justifyContent:"start"}}>
            <Button onClick={handleClose} autoFocus>
              Продолжить
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddPackage;

        
