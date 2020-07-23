import React from "react";
import EditTodo from "./Edittodo";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import '@fortawesome/fontawesome-free/css/all.min.css';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function ListOfDoneTodos(props) {
  const classes = useStyles();
  return (
    <li>
      <Card style={{ margin: "10px" }}>
      <CardActionArea>
          <CardContent style={{ backgroundColor:"#FCEF87" }}>
            <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"left"}} >
              {props.item.editing ? (
                <EditTodo
                  parentMainCallback={props.parentMainCallback}
                  handleDeleteTodo={props.handleDeleteTodo}
                  onSubmit={props.onSubmit}
                  editTodo={props.editTodo}
                  item={props.item}
                ></EditTodo>
              ) : ( 
                <span style={{textDecoration: "line-through" }} >{props.item.text}</span>
              )}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            onClick={props.onComplite}
            variant="outlined"
            color="primary"
            style={{ marginLeft: "10px" }}>
            <Typography><i className="fas fa-history"></i></Typography>
          </Button>
          <ButtonGroup
            style={{ marginLeft: "auto"}}
            color="primary"
            aria-label="outlined primary button group">
            <Button
            onClick = {props.editTodo}>
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

export default ListOfDoneTodos;
