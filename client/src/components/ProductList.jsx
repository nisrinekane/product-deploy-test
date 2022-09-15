import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = props => {
  // we get and deconstruct the function from Main which filters out deleted products
  const { removeFromDom } = props;

  // set a function that makes an api call and executed the func on the ID of the prodyct
  const deleteProduct = productId => {
    axios.delete('http://localhost:8000/api/products/'+ productId)
      .then(res => {removeFromDom(productId)})
      .catch(err => console.log(err))
  }

  return (
    <div>
      {props.products.map((product) => {
                return <p key={product._id}>
                    <Link to={"/products/" + product._id}>
                        {product.name}
                    </Link>
                    |
                    <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                </p>
            })}
    </div>
  )
}
export default ProductList;