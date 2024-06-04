import {
  CardActions,
  CardContent,
  Card,
  Button,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const ListaEntradas = props => {
  const {
    data: { id, autor, description, title },
  } = props;
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography sx={{ fontSize: 16 }} component="div">
          Autor: {autor}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to={`/entrada/${id}`}>Leer mas</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ListaEntradas;
