import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import { useDispatch } from "react-redux";
import { TypePackageEnum, setType } from "../../../redux/slices/PackageSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Button, Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const TypePackage: React.FC = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state: RootState) => state.package);
  const [value, setValue] = React.useState<TypePackageEnum>(
    TypePackageEnum.SIMPLE_PACK
  );
  const [isDisabled, setIsDisabled] = React.useState(false);

  const changeTypePackage = (e: React.ChangeEvent<HTMLInputElement>) => {
    let type = (e.target as HTMLInputElement).value as TypePackageEnum;
    setValue(type);
    dispatch(setType(type));
  };

  React.useEffect(() => {
    if (cards.length > 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [cards]);

  return (
    <>
      <div>
        <FormLabel id="type-package">Тип пакета</FormLabel>
        <Tooltip
          disableFocusListener
          title="Если в пакете есть карточка, то тип пакета нельзя поменять"
          sx={{ml:"10px"}}
        >
            <InfoOutlinedIcon color="primary" />
        </Tooltip>
      </div>
      <RadioGroup
        aria-labelledby="type-package"
        name="type-package"
        value={value}
        onChange={changeTypePackage}
        sx={{ mb: "15px" }}
      >
        <FormControlLabel
          value={TypePackageEnum.SIMPLE_PACK}
          control={<Radio />}
          label="Только название"
          disabled={isDisabled}
        />
        <FormControlLabel
          value={TypePackageEnum.WITH_DESCRIPTION}
          control={<Radio />}
          label="Слова с описанием"
          disabled={isDisabled}
        />
      </RadioGroup>
    </>
  );
};

export default TypePackage;
