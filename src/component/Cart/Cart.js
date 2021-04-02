import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Cart = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/cart?email=`+loggedInUser.email)
        .then(res => res.json())
        .then(data => setCart(data))
    },[])
    return (
        <div>
            <h3>Hello {loggedInUser.name} you have {cart.length} orders</h3>
            {
                cart.map(cart => <li key={cart._id}> product Name:{cart.name}      price:{cart.price} </li>)
            }
        </div>
    );
};

export default Cart;