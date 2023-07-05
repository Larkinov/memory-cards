import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Alert from "@mui/material/Alert";
import { StatusProcess } from "../../../redux/slices/SubjectsSlice";

const StatusSetPackage: React.FC = () => {
  const { statusSetPackage } = useSelector(
    (state: RootState) => state.subjects
  );
  const [helperText, setHelperText] = React.useState("");

  React.useEffect(() => {
    switch (statusSetPackage) {
      case StatusProcess.LOADING:
        setHelperText("Загрузка пакета!");
        break;
      case StatusProcess.ERROR:
        setHelperText("Не удалось загрузить пакет, попробуйте снова!");
        break;
      case StatusProcess.SUCCESS:
        setHelperText("Пакет успешно загружен!");
        break;
      case StatusProcess.EMPTY:
        setHelperText("");
        break;
    }
  }, [statusSetPackage]);
  return <>{helperText && <Alert severity="info" sx={{ml:"10px"}}>{helperText}</Alert>}</>;
};

export default StatusSetPackage;
