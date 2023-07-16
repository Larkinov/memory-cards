import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Dialog, DialogContent, Box } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
import { removeCard } from "../../redux/slices/PackageSlice";

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
  idGameCard?: number;
};

const BasicCard: React.FC<TBasicCard> = ({
  name,
  height,
  description,
  withButton,
  width,
  id,
  isDelete,
  idGameCard,
}) => {
  const dispatch = useDispatch();
  const [backColor, setBackColor] = React.useState("#2196f3");
  const [isOpen, setIsOpen] = React.useState(false);

  const deleteCard = () => {
    if (id !== undefined) {
      dispatch(removeCard(id));
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  const onClickCard = () => {
    if (idGameCard !== undefined) {
      if (idGameCard === id) {
        setBackColor("green");
      } else {
        setBackColor("red");
      }
      setTimeout(() => {
        setBackColor("#2196f3");
      }, 800);
    }
  };

  return (
    <>
      <Card
        sx={{
          height: height,
          backgroundColor: backColor,
          color: "white",
          width: width,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          position: "relative",
        }}
        onClick={() => onClickCard()}
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
                  <Button
                    size="small"
                    color={"success"}
                    variant={"contained"}
                    onClick={() => handleOpen()}
                  >
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
            <ClearIcon color="action" />
          </Button>
        )}
      </Card>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogContent>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h6" textAlign={"center"}>
              {name}
            </Typography>
            <Typography variant="body2" textAlign={"justify"}>
              {description}
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BasicCard;
