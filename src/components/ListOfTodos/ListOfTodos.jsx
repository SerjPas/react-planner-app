import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


const ListOfTodo = (props) => {
    return (
        <li>
            <Card style={{margin: "10px"}}>
                <CardContent>
                    {props.text}
                </CardContent>
            </Card>
        </li>
    );
}
export default ListOfTodo