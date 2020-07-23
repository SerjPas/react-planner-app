import React from "react";
import EditTodo from "./Edittodo";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "@fortawesome/fontawesome-free/css/all.min.css";

function ListOfTodo(props) {
  console.log(props)
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
            <Typography>
              <i className="fas fa-check"></i>
            </Typography>
          </Button>
          <span className="word-wrap" style={{ marginLeft: "20px" }}>
            {props.item.editing? <EditTodo deleteTodo = {props.deleteTodo} onSubmit={props.onSubmit} editTodo = {props.editTodo} item = {props.item }></EditTodo> : props.item.text}
          </span>
          <ButtonGroup
            style={{ marginLeft: "auto" }}
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button onClick={props.editTodo}>
              <Typography>Edit</Typography>
            </Button>

            <Button color="primary" onClick={props.addToFavorite}>
              <i
                className="far fa-star"
                style={{ backgroundColor: props.item.favorite ? "yellow" : "" }}
              ></i>
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
export default ListOfTodo;
