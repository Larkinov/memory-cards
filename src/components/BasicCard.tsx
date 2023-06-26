import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export enum HeightCard {
  SMALL = "10vh",
  MEDIUM = "15vh",
  LARGE = "20vh",
  HEAVY = "25vh",
}

type TBasicCard = {
  name: string;
  description?: string;
  height: HeightCard;
  withButton: boolean;
};

const BasicCard: React.FC<TBasicCard> = ({
  name,
  height,
  description,
  withButton,
}) => {
  return (
    <Card
      sx={{
        height: height,
        backgroundColor: "#2196f3",
        color: "white",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <CardContent>
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
    </Card>
  );
};

export default BasicCard;
