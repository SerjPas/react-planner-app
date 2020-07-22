import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import '@fortawesome/fontawesome-free/css/all.min.css';

function ListOfDoneTodos(props) {
  return (
    <li>
      <Card style={{ margin: "10px" }}>
        <CardContent style={{ display: "flex" }}>
          <Button
            onClick={props.onComplite}
            variant="contained"
            color="primary"
            style={{ marginLeft: "10px" }}
          >
            <Typography><i class="fas fa-history"></i></Typography>
          </Button>
          <Typography style={{ marginLeft: "20px" }}>{props.item.text}</Typography>
          <ButtonGroup
            style={{ marginLeft: "auto"}}
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button>
              <Typography>Edit</Typography>
            </Button>

            <Button color="primary" onClick={props.addToFavorite}>
              <i className="far fa-star"
              style={{ backgroundColor: props.item.favorite ? "yellow" : "" }}>
              </i>
            </Button>
            
            <Button
              onClick={props.deleteTodo}
              variant="contained"
              color="primary"
            >
              <Typography>X</Typography>
            </Button>
          </ButtonGroup>
        </CardContent>
      </Card>
    </li>
  );
}

export default ListOfDoneTodos;
