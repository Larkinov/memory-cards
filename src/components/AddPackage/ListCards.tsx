import React from "react";
import List from "@mui/material/List/List";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { TypePackageEnum } from "../../redux/slices/PackageSlice";
import ElemList from "./ElemList";

const ListCards: React.FC = () => {
  const dispatch = useDispatch();
  const { type, cards } = useSelector((state: RootState) => state.package);

  const [withDesc, setWithDesc] = React.useState(false);

  React.useEffect(() => {
    if (type === TypePackageEnum.WITH_DESCRIPTION) {
      setWithDesc(true);
    } else {
      setWithDesc(false);
    }
  }, [type]);

  return (
    <>
      <List
        sx={{
          height: "200px",
          width: "300px",
          border: "1px solid lightgray",
          overflow: "auto",
        }}
      >
        <ElemList withDesc={withDesc} key={"0"} id={0}/>
        {cards && cards.map((elem)=>(
          <ElemList withDesc={withDesc} key={elem.id} id={elem.id+1}/>
        ))}
      </List>
    </>
  );
};

export default ListCards;
