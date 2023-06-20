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
};

const BasicCard: React.FC<TBasicCard> = ({ name, height, description }) => {
  return (
    <Card sx={{ height: height, backgroundColor:"#2196f3", color:"white", width:"100%"}}>
      <CardContent>
        <Typography variant="h5" component="div" align="center">
          {name}
        </Typography>
        {description && (
          <div>
            <Typography variant="body1" component="div">
              {description}
            </Typography>
            <CardActions>
              <Button size="small">Читать дальше</Button>
            </CardActions>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BasicCard;
