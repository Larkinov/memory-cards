import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeCard } from "../redux/slices/PackageSlice";

export enum HeightCard {
  SMALL = "10vh",
  MEDIUM = "15vh",
  LARGE = "20vh",
  HEAVY = "25vh",
}

export enum WidthCard {
  SMALL = "15%",
  MEDIUM = "20%",
  LARGE = "25%",
  HEAVY = "35%",
  FULL = "100%",
}

type TBasicCard = {
  name: string;
  description?: string;
  height: HeightCard;
  width: WidthCard;
  withButton: boolean;
  id?: number;
  isDelete: boolean;
};

const BasicCard: React.FC<TBasicCard> = ({
  name,
  height,
  description,
  withButton,
  width,
  id,
  isDelete,
}) => {
  const dispatch = useDispatch();

  const deleteCard = () => {
    if (id !== undefined) dispatch(removeCard(id));
  };
  
  return (
    <Card
      sx={{
        height: height,
        backgroundColor: "#2196f3",
        color: "white",
        width: width,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        position: "relative",
      }}
    >
      <CardContent sx={{ position: "relative" }}>
        <Typography variant="h5" component="div" align="center">
          {name}
        </Typography>
        {description && (
          <>
            <Typography
              variant="body1"
              component="div"
              height={"5vh"}
              sx={{ whiteSpace: "wrap", overflow: "hidden" }}
            >
              {description}
            </Typography>
            {withButton && (
              <CardActions>
                <Button size="small" color={"success"} variant={"contained"}>
                  Читать дальше
                </Button>
              </CardActions>
            )}
          </>
        )}
      </CardContent>
      {isDelete && (
        <Button
          onClick={deleteCard}
          sx={{
            zIndex: "1",
            position: "absolute",
            right: "0px",
            top: "0",
          }}
        >
          <DeleteIcon color="action" />
        </Button>
      )}
    </Card>
  );
};

export default BasicCard;
