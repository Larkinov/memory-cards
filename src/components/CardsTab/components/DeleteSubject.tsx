import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../redux/store";
import { deletePackageDB } from "../../../redux/slices/SubjectsSlice";

const DeleteSubject: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const { thisSubjectId} = useSelector(
    (state: RootState) => state.subjects
  );
  const appDispatch = useAppDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteSubject = () => {
    appDispatch(deletePackageDB(thisSubjectId));
    console.log(thisSubjectId);
    
    handleClose();
  };



  return (
    <>
      <IconButton
        sx={{ position: "absolute", right: "20px" }}
        onClick={() => handleClickOpen()}
      >
        <DeleteIcon />
      </IconButton>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Вы уверены, что хотите удалить весь пакет?</DialogTitle>
          <DialogActions>
            <Button onClick={handleClose}>Нет</Button>
            <Button onClick={() => deleteSubject()} autoFocus>
              Да
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default DeleteSubject;
