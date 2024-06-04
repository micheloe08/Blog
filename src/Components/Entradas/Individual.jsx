import {
    CardActions,
    CardContent,
    Card,
    Typography,
  } from "@material-ui/core";
import { useState } from "react";
import { useParams } from "react-router-dom";
 
  const Individual = () => {
  const [lista, setLista] = useState(JSON.parse(localStorage.getItem("listaEntradas")));
  const { id } = useParams();
  let index = lista.findIndex(e => e.id == id)
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {lista[index].title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {lista[index].description}
                </Typography>
                <Typography variant="body2">
                    Autor: {lista[index].autor}
                </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    );
  }
  export default Individual