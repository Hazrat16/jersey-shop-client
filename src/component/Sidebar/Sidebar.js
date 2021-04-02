import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <div className="sidenav">
                <Link to="/manage">Manage Jersey</Link>
                <Link to="/addProduct">Add Product</Link>
                <Link to="/edit">Edit jersey</Link>
            </div>
        </div>
    );
};

export default Sidebar;