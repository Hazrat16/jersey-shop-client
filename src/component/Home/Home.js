import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup, Row } from 'react-bootstrap';
import Product from '../Product/Product';


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className="mt-5 w-50 search-bar">
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search Jersey"
                    />
                    <InputGroup.Append>
                        <Button style={{ backgroundColor: '#6946F4', color: 'white' }} variant="outline-secondary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
            <div style={{ overflow: 'hidden', backgroundColor: '#0E0A2A', margin: '20px' }}>
                <Row>
                    {
                        products.map(pd => <Product key={pd._id} pd={pd}></Product>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;