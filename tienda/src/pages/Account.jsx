import React from 'react';
import { Link} from 'react-router-dom';

function Account (){
    return(
        <React.Fragment>
            <div>
                <img alt="logo"></img>
                <Link to="">Comentarios & ayuda</Link>
            </div>

            <div className="Account">
                <form  className="Account__form">
                    <img src="" alt="User"></img>
                    <Link> Change picture</Link>
                    <input type="text" placeholder="User name"/>
                    <input type="text" placeholder="Main"/> 
                    <input type="text" placeholder="Payment data"/>
                    <input type="text" placeholder="History"/>
                    <div className="links">
                        <Link>Change name</Link>
                        <Link>Change mail</Link>
                        <Link>Change data</Link>
                        <Link>Delete History</Link>
                        <Link>Log out</Link>
                    </div>
                    
                </form>
            </div>
        </React.Fragment>
    );
}

export default Account;