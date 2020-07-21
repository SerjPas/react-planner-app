import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";


function ListOfTodo(props){
    return (
        <li>
            <Card style={{margin: "10px"}}>
                <CardContent style = {{display:"flex"}}>
                    <Button
                    variant="contained"
                    color="primary"
                    style={{marginLeft: "10px"}}>
                        done
                    </Button>
                    <span style = {{marginLeft: "20px"}}>{props.text}</span> 
                    <Button
                    variant="contained"
                    color="primary"
                    style={{marginLeft: "auto"}}>
                        delete
                    </Button>              
                </CardContent>
            </Card>
        </li>
    );
}
export default ListOfTodo