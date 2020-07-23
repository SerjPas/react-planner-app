import React from "react";
import EditTodo from "./Edittodo";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import "@fortawesome/fontawesome-free/css/all.min.css";

function ListOfTodo(props) {
  return (
    <li>
      <Card style={{ margin: "10px" }}>
        <CardActionArea>
          <CardContent >
            <Typography variant="body1" color="text" component="p" className="word-wrap" style={{ textAlign:"left" }}>
              {props.item.editing ? (
                <EditTodo
                  parentMainCallback={props.parentMainCallback}
                  handleDeleteTodo={props.handleDeleteTodo}
                  onSubmit={props.onSubmit}
                  editTodo={props.editTodo}
                  item={props.item}
                ></EditTodo>
              ) : (
                props.item.text
              )}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={props.onComplite}
            variant="contained"
            style={{ marginRight: "auto" }}
          >
            <Typography>
              <i className="fas fa-check"></i>
            </Typography>
          </Button>
          <ButtonGroup
            style={{ marginLeft: "auto" }}
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button
            onClick={props.editTodo}>
              <Typography>Edit</Typography>
            </Button>

            <Button color="primary" onClick={props.addToFavorite}>
              <i
                className="far fa-star"
                style={{ backgroundColor: props.item.favorite ? "yellow" : "" }}
              ></i>
            </Button>

            <Button
              onClick={props.handleDeleteTodo}
              variant="contained"
              color="primary"
            >
              <Typography>X</Typography>
            </Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </li>
  );
}
export default ListOfTodo;
