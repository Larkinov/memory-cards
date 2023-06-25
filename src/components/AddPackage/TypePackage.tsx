import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import { useDispatch } from "react-redux";
import { TypePackageEnum, setType } from "../../redux/slices/PackageSlice";

const TypePackage: React.FC = () => {

  const dispatch = useDispatch();
  const [value, setValue] = React.useState<TypePackageEnum>(
    TypePackageEnum.SIMPLE_PACK
  );

  const changeTypePackage = (e: React.ChangeEvent<HTMLInputElement>) => {
    let type = (e.target as HTMLInputElement).value as TypePackageEnum;
    setValue(type);
    dispatch(setType(type));
  };

  return (
    <>
      <FormLabel id="type-package">Тип карточки</FormLabel>
      <RadioGroup
        aria-labelledby="type-package"
        name="type-package"
        value={value}
        onChange={changeTypePackage}
        sx={{mb:"15px"}}
      >
        <FormControlLabel
          value={TypePackageEnum.SIMPLE_PACK}
          control={<Radio />}
          label="Только название"
        />
        <FormControlLabel
          value={TypePackageEnum.WITH_DESCRIPTION}
          control={<Radio />}
          label="Слова с описанием"
        />
      </RadioGroup>
    </>
  );
};

export default TypePackage;
