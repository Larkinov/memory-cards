import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type TBasicCard = {
  name:string;
  description?:string;
}

const BasicCard:React.FC<TBasicCard> = ({name,description}) => {
  return (
    <Card sx={{height:"20vh"}}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body1" component="div">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Читать дальше</Button>
      </CardActions>
    </Card>
  );
};

export default BasicCard;
