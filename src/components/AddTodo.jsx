import React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

class AddToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoInput: "",
        };
    }

    handleOnChange = (event) => {
        if (event.target.value !== "") {
            this.setState({
                [event.target.name]: event.target.value,
            });
        }
    };
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.todoInput !== ""){
            this.props.onSubmit({
            id: Date.now(),
            text: this.state.todoInput,
            complete: false,
        });
        }
        //clear input after submit
        this.setState({
            todoInput: ""
        });
    };

    render() {
        return (
            <form
                className="form"
                onSubmit={this.handleSubmit}
                style={{margin: "20px"}}
            >
                <div>
                    <label htmlFor="todo"></label>
                    <Input
                        id="todo"
                        name="todoInput"
                        placeholder="My Todo:"
                        value={this.state.todoInput}
                        onChange={this.handleOnChange}
                        inputProps={{"aria-label": "description"}}
                    />
                </div>
                <Button
                    placeholder="+"
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{marginLeft: "10px"}}
                >
                    +
                </Button>
            </form>
        );
    }
}

export default AddToDo;
