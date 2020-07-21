import React from 'react'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

function ListOfDoneTodos(props) {
    return (
        <li>
            <Card style={{margin: "10px"}}>
                <CardContent style = {{display:"flex"}}>
                    <Button
                    onClick= {props.onComplite}
                    variant="contained"
                    color="primary"
                    style={{marginLeft: "10px"}}>
                        revert
                    </Button>
                    <span style = {{marginLeft: "20px"}}>{props.item.text}</span> 
                    <Button
                    variant="contained"
                    color="primary"
                    style={{marginLeft: "auto"}}>
                        delete
                    </Button>              
                </CardContent>
            </Card>
        </li>
    )
}

export default ListOfDoneTodos
