import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
    
const Update = (props) => {
  // to redirect after submitting
    const navigate = useNavigate();

    const { id } = useParams();
    const [name, setName] = useState(' ');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState(' ')
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setName(res.data.name);
                setPrice(res.data.price);
                setDescription(res.data.description)
            })
    }, []);
    
    const updateProduct = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}/edit`, {
            name,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));

            navigate('/products');
    }
    
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Name</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;

