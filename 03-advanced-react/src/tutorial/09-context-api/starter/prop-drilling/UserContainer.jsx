import { useState } from "react";

const UserContainer = ({user, logout}) => {
    console.log(user);
    return (
        <>
            {user ? (
                <div className='user-container'>
                    <p>Hello There, {user.name}</p>
                    <button className="btn" onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>please login</div>
            )}
        </>
    );
};

export default UserContainer;
