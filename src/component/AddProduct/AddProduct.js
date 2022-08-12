import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);


    const onSubmit = data => {
        const productData = {
            name: data.name,
            imageURL: imageURL,
            price: data.price,
        };
        const url = `https://limitless-fjord-93477.herokuapp.com/addProduct`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server side response', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '6ef39c482b09320ba0310504b60d01a5');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div>
            <Sidebar/>
            <div style={{paddingLeft:'200px'}}>
                <h1>Add your awesome jersey here</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input name="name" defaultValue="Jersey" ref={register} />
                    <br />
                    <input name="price" defaultValue="Price" ref={register} />
                    <br/>
                    <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;