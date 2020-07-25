import React from "react";
import EditTodo from "./Edittodo";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import "@fortawesome/fontawesome-free/css/all.min.css";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function ListOfTodo(props) {
  const classes = useStyles();
  return (
    <li style={{ alignItems: "center"}}>
      <Card style={{ margin: "10px"}}>
        <CardActionArea>
          <CardContent style={{ backgroundColor:"#FCEF87" }} >
            <div variant="body1" className="word-wrap" style={{ textAlign:"left" }}>
              {!props.item.editing ? 
                props.item.complete ? props.item.favorite ? 
                (<span style={{textDecoration: "line-through", color: "red" }}>{props.item.text}</span>) : 
                (<span style={{textDecoration: "line-through" }}>{props.item.text}</span>) :
                props.item.favorite ? (<span style={{color: "red" }}>{props.item.text}</span>):
                (<span>{props.item.text}</span>)
              : (
                <EditTodo
                  parentMainCallback={props.parentMainCallback}
                  handleDeleteTodo={props.handleDeleteTodo}
                  onSubmit={props.onSubmit}
                  editTodo={props.editTodo}
                  item={props.item}>
                  </EditTodo>
              )}
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            variant="outlined"
            onClick={props.onComplite}
            style={{ marginRight: "auto" }}>
            <Typography>
            {props.item.complete ? (
            <i className="fas fa-history"></i>
            ): "DONE" }
            </Typography>
          </Button>
          <ButtonGroup
            style={{ marginLeft: "auto" }}
            color="primary"
            aria-label="outlined primary button group">
            <Button onClick={props.editTodo}>
              <Typography>Edit</Typography>
            </Button>
            <Button color="primary" onClick={props.addToFavorite}>
              <i className="far fa-star"
                style={{ color: props.item.favorite ? "red" : "" }}>
              </i>
            </Button>
            </ButtonGroup>
            <IconButton
              onClick={props.handleDeleteTodo}
              aria-label="delete" className={classes.margin}>
              <DeleteIcon fontSize="small"/>
            </IconButton>          
        </CardActions>
      </Card>
    </li>
  );
}
export default ListOfTodo;
