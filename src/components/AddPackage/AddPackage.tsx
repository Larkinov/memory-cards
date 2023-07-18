import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import FormControl from "@mui/material/FormControl";
import InputPackageName from "./components/InputPackageName";
import TypePackage from "./components/TypePackage";
import ListCards from "./ListCards";
import { useDispatch } from "react-redux";
import { clearInitialState } from "../../redux/slices/PackageSlice";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Transition from "./Transition";
import { StatusProcess, setStatusSetPackage } from "../../redux/slices/SubjectsSlice";
import BtnContinue from "./BtnContinue";
import StatusSetPackage from "./components/StatusSetPackage";
import { setSubjectsData } from "../../utils/localUserData";

type AddPackageProps = {
  isOpen: boolean;
  setOpen: Function;
};

const AddPackage: React.FC<AddPackageProps> = ({ isOpen, setOpen }) => {
  const dispatch = useDispatch();
  const { statusSetPackage } = useSelector(
    (state: RootState) => state.subjects
  );
 
  const { cards } = useSelector((state: RootState) => state.package);
  const {subjects} = useSelector((state:RootState)=>state.subjects);
  const [errorName, setErrorName] = React.useState(false);
  const [errorCards, setErrorCards] = React.useState(false);
  const handleClose = () => {
    dispatch(clearInitialState());
    setErrorCards(false);
    setErrorName(false);
    setOpen(false);
  };

  React.useEffect(() => {
    if (cards.length > 0) {
      setErrorCards(false);
    }
  }, [cards]);

  React.useEffect(()=>{
    if(statusSetPackage===StatusProcess.SUCCESS){
      setSubjectsData(subjects);
      setTimeout(() => {
        setOpen(false);
        dispatch(setStatusSetPackage(StatusProcess.EMPTY));
      }, 1500);
    }
  },[statusSetPackage])

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
            <BtnContinue
              errorCards={(f: boolean) => setErrorCards(f)}
              errorName={(f: boolean) => setErrorCards(f)}
            />
            <StatusSetPackage/>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddPackage;
