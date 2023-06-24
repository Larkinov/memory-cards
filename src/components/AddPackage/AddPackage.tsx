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
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          Добавление нового пакета
        </DialogTitle>
        <DialogContent>
          <FormControl>
            <InputPackageName />
            <TypePackage />
            <ListCards />
          </FormControl>
          <DialogActions>
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
