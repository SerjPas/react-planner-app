import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import '@fortawesome/fontawesome-free/css/all.min.css';

function AddtoFavorite(props) {
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
            done
          </Button>
          <span style={{ marginLeft: "20px" }}>{props.item.text}</span>
          <ButtonGroup
            style={{ marginLeft: "auto"}}
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button>One</Button>
            <Button
              onClick = {props.addToFavorite}
            ><i className="far fa-star"></i>
            </Button>
            <Button
              onClick={props.deleteTodo}
              variant="contained"
              color="primary"
            >
              delete
            </Button>
          </ButtonGroup>
        </CardContent>
      </Card>
    </li>
  );
}
export default AddtoFavorite;
