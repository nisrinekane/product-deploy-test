import React, { useState } from 'react'
import axios from 'axios';
export default () => {

    //keeps track of what is being typed via useState hook
    const [name, setName] = useState(""); 
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("")

    //handler for when the form is submitted
    const onSubmitHandler = e => {
        //prevent the default behavior of the submit
        e.preventDefault();
        //make a POST request to create a new person
        axios.post('http://localhost:8000/api/products', {
            name,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update name, price and description
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

