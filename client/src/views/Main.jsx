import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(res => {
        setProducts(res.data)
        setLoaded(true);
      })
      .catch(err => console.log(err))
  }, [])

  // set a function that takes the product id as an argument and returns all products that do not match the id of the product 'deleted'
  const removeFromDom = productId => {
    setProducts(products.filter(product => product._id !== productId))
  }

  return (
    <div>
      <ProductForm />
      <hr />
      {/* send in the removefromdom func to productList */}
        {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
    </div>
  )
}

export default Main