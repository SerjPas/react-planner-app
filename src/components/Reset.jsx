import React from 'react'
import Button from "@material-ui/core/Button";

function Reset(props) {
    return (
        <Button onClick = {props.handleReset} style= {{border: "1px"}}><i className="fa fa-refresh" aria-hidden="true"></i></Button>  
    )
}

export default Reset
