import React from 'react';
import * as mutations from '../store/mutations';
import { connect } from 'react-redux';

const LoginComponent = (authenticateUser) => {
    return <div>
        <h2>
            Please login
        </h2>
        <form onSubmit={authenticateUser}>
            <input  type="text" placeholder="username" name="username" defaultValue="Dev"/>
            <input  type="password" placeholder="password" name="password" defaultValue=""/>
            <button type="submit">Login</button>
        </form>
    </div>
};

const mapStateToProps = state=>state; 

const mapDispatchToProps = (dispatch) => ({
    authenticateUser(e){
        e.preventDefault();
        let username = e.target['username'].value;
        let password = e.target['password'].value; 
        dispatch(mutatations.requestAuthenticateUser(username, password));
    }
})
export const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);