import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


const ListOfTodo = (props) => {
    return (
        <Card style={{margin: "10px"}}>
            <CardContent>
                <li>{props.text}</li>
            </CardContent>
        </Card>
    );
}
export default ListOfTodo