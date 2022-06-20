import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostComponent from '../post/PostComponent';
import ReadPostComponent from '../post/ReadPostComponent';
import AddUserComponent from "../user/AddUserComponent";
import EditUserComponent from "../user/EditUserComponent";
import UserListComponent from "../user/UserListComponent";

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
            <div style={style}>
                <Switch>
                    <Route exact path="/" component={UserListComponent}/>
                    <Route path="/users" component={UserListComponent} />
                    <Route path="/add-user" component={AddUserComponent} />
                    <Route path="/edit-user" component={EditUserComponent} />

                    <Route path="/post" component={PostComponent} />
                    <Route path="/readPost/:postNo" component={ReadPostComponent} />
                    
                </Switch>
            </div>
            </BrowserRouter>
        </div>
    );
}

const style={
    marginTop: '20px'
}

export default AppRouter;