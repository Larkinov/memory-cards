import React from "react";
import Grid from "@mui/material/Grid/Grid";
import Alert from "@mui/material/Alert";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Cards from "./components/Cards";
import EditMode from "./components/EditMode";
import { StatusProcess, setStatusDeletePackage } from "../../redux/slices/SubjectsSlice";
import { useDispatch } from "react-redux";

const CardsTab: React.FC = () => {
  const { subjects, statusDeletePackage } = useSelector(
    (state: RootState) => state.subjects
  );
  const [isError, setIsError] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [helperText, setHelperText] = React.useState("");
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (subjects.length === 0) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  }, [subjects.length]);

  const editMode = (f: boolean) => {
    setIsEdit(f);
  };

  React.useEffect(() => {
    switch (statusDeletePackage) {
      case StatusProcess.EMPTY:
        setHelperText("");
        break;
      case StatusProcess.SUCCESS:
        setHelperText("Пакет успешно удален!");
        setTimeout(() => {
          setHelperText("");
          dispatch(setStatusDeletePackage(StatusProcess.EMPTY));
        }, 3000);
        break;
      case StatusProcess.ERROR:
        setHelperText("Не удалось удалить пакет, попробуйте снова");
        setTimeout(() => {
          setHelperText("");
          dispatch(setStatusDeletePackage(StatusProcess.EMPTY));
        }, 3000);
        break;
    }
  }, [statusDeletePackage]);

  return (
    <>
      <EditMode editMode={(f: boolean) => editMode(f)} />
      <Grid container sx={{ overflow: "auto" }} p={1} spacing={1} mt={0}>
        {isError && <Cards isEdit={isEdit} />}
      </Grid>
      {helperText && <Alert severity="info">{helperText}</Alert>}
    </>
  );
};

export default CardsTab;
