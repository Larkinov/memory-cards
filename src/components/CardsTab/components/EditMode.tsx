import React from "react";
import { Switch,Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteSubject from "./DeleteSubject";

type EditModeProps = {
  editMode: Function;
};

const EditMode: React.FC<EditModeProps> = ({ editMode }) => {
  const [isEdit, setIsEdit] = React.useState<boolean>(false);
  const onEditMode = () => {
    editMode(!isEdit);
    setIsEdit(!isEdit);
  };

  return (
    <>
      <Stack direction={"row"} ml={"10px"}>
        <EditIcon sx={{ mt: "4px" }} />
        <Switch checked={isEdit} onChange={onEditMode} sx={{ mb: "0.5rem" }} />
        {isEdit && <DeleteSubject />}
      </Stack>
    </>
  );
};

export default EditMode;
