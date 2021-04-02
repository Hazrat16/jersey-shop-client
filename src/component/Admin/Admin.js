import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Admin.css'
import { useForm } from "react-hook-form";
import Sidebar from './../Sidebar/Sidebar'

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Sidebar/>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} style={{marginLeft:'500px',padding:'50px'}}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input name="example" defaultValue="test" ref={register} />
                    <input name="exampleRequired" className="ml-5" ref={register({ required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br/>
                    <input className="mt-2" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Admin;