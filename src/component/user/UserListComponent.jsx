import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@material-ui/core";
import React, { Component } from "react";
import ApiService from "../../ApiService";
import CreateIcon from "@material-ui/icons/Create"
import DeleteIcon from "@material-ui/icons/Delete"


class UserListComponent extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            users: [],
            message: null,
        }
    }

    componentDidMount(){
        this.reloadUserList();
    }

    reloadUserList = () => {
        ApiService.fetchUsers()
        .then(res => {
            this.setState({
                users: res.data
            })
        })
        .catch(err => {
            console.log('reloadUserList() Error!', err);
        });
    }
    deleteUser = (userId) => {
        ApiService.deleteUser(userId)
        .then(res => {
            this.setState({
                message: 'User Deleted Successfully.'
            });
            this.setState({
                users: this.state.users.filter( user =>
                    user.id !== userId)
            });
        })
        .catch(err => {
            console.log('deleteUser() Error!', err);
        });
    }

    editUser = (Id) => {
        
        window.localStorage.setItem("userId", Id);
        this.props.history.push('/edit-user');
        window.location.reload();
    }
    addUser = () => {
        
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');
        window.location.reload();
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>User List</Typography>
                <Button variant="contained" color="primary" onClick={this.addUser}> Add User </Button>
                <Table> 
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>FirstName</TableCell>
                            <TableCell align="right">LastName</TableCell>
                            <TableCell align="right">UserName</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Salary</TableCell>
                            <TableCell align="right">Edit</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.users.map(user =>
                            <TableRow key={user.id}>
                                <TableCell component="th" scope="user">{user.id}</TableCell>
                                <TableCell align="right">{user.firstName}</TableCell>
                                <TableCell align="right">{user.lastName}</TableCell>
                                <TableCell align="right">{user.username}</TableCell>
                                <TableCell align="right">{user.age}</TableCell>
                                <TableCell align="right">{user.salary}</TableCell>
                                <TableCell align="right" onClick={() => this.editUser(user.id)}>
                                    <CreateIcon />
                                </TableCell>
                                <TableCell align="right" onClick={() => this.deleteUser(user.id)}>
                                    <DeleteIcon />
                                </TableCell>
                                
                            </TableRow>
                            )}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

export default UserListComponent;