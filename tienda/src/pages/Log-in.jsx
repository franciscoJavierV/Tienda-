import React from 'react';
import { Link } from 'react-router-dom';

function Log_in (){
    return(
        <React.Fragment>
            <section className="login_head">
                <img className="log__image" src='' alt='logo'></img>
                <h1>LOG IN</h1>
            </section>
            <section className="login">
                <img className="login__user" alt="user__image" src=""></img>
                <form className="login__form">
                    <input type="text" placeholder="User_name"/>  
                    <input type="password" placeholder="Password"/>
                    <input type="checkbox"  name="remember_me" value="Remember-me"/> 
                    <label for="remember_me" value="remember-me" > Remember-me</label>
                    <input type="button" value="log-in"/>      
                    <div className="login__social">
                        <img alt="twitter"></img>
                        <img alt="google"></img>
                        <img alt="facebook"></img>
                    </div>
                </form> 
                <Link > Register-now</Link>   
            </section>    
        </React.Fragment>
            );
}

export default Log_in;