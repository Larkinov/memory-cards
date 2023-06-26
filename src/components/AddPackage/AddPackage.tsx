import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import FormControl from "@mui/material/FormControl";
import InputPackageName from "./InputPackageName";
import TypePackage from "./TypePackage";
import ListCards from "./ListCards";
import { useDispatch } from "react-redux";
import { clearInitialState } from "../../redux/slices/PackageSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Transition from "./Transition";
import { ISubject, setSubject } from "../../redux/slices/SubjectsSlice";

type AddPackageProps = {
  isOpen: boolean;
  setOpen: Function;
};

const AddPackage: React.FC<AddPackageProps> = ({ isOpen, setOpen }) => {
  const dispatch = useDispatch();
  const { cards, name,type } = useSelector((state: RootState) => state.package);
  const [errorName, setErrorName] = React.useState(false);
  const [errorCards, setErrorCards] = React.useState(false);
  const handleClose = () => {
    dispatch(clearInitialState());
    setErrorCards(false);
    setErrorName(false);
    setOpen(false);
  };

  const onClickContinue = () => {
    if (name && cards.length > 0) {
      setErrorCards(false);
      setErrorName(false);
      setOpen(false);
      dispatch(setSubject({title:name, cards:cards, type:type} as ISubject));
    } else {
      if (!name) {
        setErrorName(true);
      }

      if (cards.length === 0) {
        setErrorCards(true);
      }
    }
  };

  React.useEffect(() => {
    if (cards.length > 0) {
      setErrorCards(false);
    }
  }, [cards]);

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        fullScreen
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
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
            <InputPackageName
              isError={errorName}
              onFocus={() => setErrorName(false)}
            />
            <TypePackage />
            <ListCards isError={errorCards} />
          </FormControl>
          <DialogActions sx={{ display: "flex", justifyContent: "start" }}>
            <Button onClick={onClickContinue} autoFocus>
              Создать пакет
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddPackage;
