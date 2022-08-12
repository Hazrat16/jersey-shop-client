import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const CheckOut = () => {
    const {id} = useParams()
    const [jerseyDetail, setJerseyDetail] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`https://limitless-fjord-93477.herokuapp.com/checkout/${id}`)
        .then(res => res.json())
        .then(data => setJerseyDetail(data[0]))
    },[id])
    console.log(jerseyDetail);

    const handleOrder = () => {
        const orderDetails = {
            name: loggedInUser.name,
            email: loggedInUser.email,
            jerseyName: jerseyDetail.name,
            price:jerseyDetail.price
        }
    }

    return (
        <div>
            <h3>CheckOut</h3>
            <div className="table" style={{ marginLeft: '70px',width: '900px'}}>
                <table>
                    <thead>
                        <tr>
                            <th>Jersey</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CheckOut;