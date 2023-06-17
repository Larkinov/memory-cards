import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type TBasicCard = {
  name: string;
  description?: string;
};

const BasicCard: React.FC<TBasicCard> = ({ name, description }) => {
  return (
    <Card sx={{ height: "15vh", backgroundColor:"#2196f3", color:"white"}}>
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
