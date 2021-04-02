import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';

const Product = ({pd}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [cart,setCart] = useState({
        name: pd.name,
        price:pd.price
    })
    let history = useHistory();
    const handleCart = () => {
        
        console.log(pd._id);
        const newCart = {...loggedInUser, ...cart};
        fetch(`http://localhost:5000/addCart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCart)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

        history.push(`/checkout/${pd._id}`)
    }
    return (
        <Col md={4} >
            <Card className="mx-5 mt-5 ">
                <Card.Img className="rounded" variant="top" src={pd.imageURL} />
                <Card.Body className="text-dark">
                    <Card.Title>{pd.name}</Card.Title>
                    <Card.Text>Price: ${pd.price}</Card.Text>
                    <Button onClick={handleCart}  variant="primary" color="primary">Add To Cart {" "}<FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></Button>
                </Card.Body>
            </Card>
        </Col>
        // <div className="d-flex justify-content-around" style={{border: '1px solid black',marginLeft:'10px',padding:'5px'}}>
        //     <div className="col-md-3 " >
        //         <img style={{height: '300px'}} src={pd.imageURL} alt=""/>
        //         <h3>{pd.name}</h3>
        //         <h4>{pd.price}</h4>
        //         <Button variant="primary">Add Product</Button>
        //     </div>
        // </div>
    );
};

export default Product;