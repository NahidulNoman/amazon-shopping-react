import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Inventory = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <h2>this is inventory page. For {user?.name}</h2>
        </div>
    );
};

export default Inventory;