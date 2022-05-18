import { Button, TextField, Typography } from "@material-ui/core";
import React, { Component } from "react";
import ApiService from "../../ApiService";

class AddUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            firstName:'',
            lastName: '',
            age: '',
            salary: '',
            message: null,
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    saveUser = (e) => {
        e.preventDefault();
        let user={
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            salary: this.state.salary,
        }

        ApiService.addUser(user)
        .then (res => {
            this.setState({
                message: user.username + '님이 성공적으로 등록되었습니다.'
            })
            console.log(this.state.message);
            this.props.history.push('/users');

        })
        .catch( err => {
            console.log('saveUser() 에러', err);
        });
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Add User</Typography>
                <form style={formContainer}>

                    <TextField type = "text" placefolder = "please input your username" name="username"
                    fullWidth margin="nomal" value={this.state.username} onChange={this.onChange} />

                    <TextField type = "password" placefolder = "please input your password" name="password"
                    fullWidth margin="nomal" value={this.state.password} onChange={this.onChange} />

                    <TextField placefolder = "please input your first name" name="firstName"
                    fullWidth margin="nomal" value={this.state.firstName} onChange={this.onChange} />        

                    <TextField placefolder = "please input your last name" name="lastName"
                    fullWidth margin="nomal" value={this.state.lastName} onChange={this.onChange} />        
                    
                    <TextField type="number" placefolder = "please input your age" name="age"
                    fullWidth margin="nomal" value={this.state.age} onChange={this.onChange} />        

                    <TextField type="number" placefolder = "please input your salary" name="salary"
                    fullWidth margin="nomal" value={this.state.salary} onChange={this.onChange} />        

                    <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
                    
                </form>
            </div>
        );
    }
}

const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
} 

const style = {
    display: 'flex',
    justifyContent: 'center'
}


export default AddUserComponent;