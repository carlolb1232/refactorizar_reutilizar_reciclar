import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { simpleGet } from '../Services/SimpleGet';
import DeleteButton from './Buttons/DeleteButton';

const ProductList = () => {
  const [products, setProducts] = useState();
  const [deleteId, setDeleteId] = useState();

  const getProductsFromService = async () => {
    const productsFromService = await simpleGet(`http://localhost:8000/api/products`);
    console.log("PRODUCTS", productsFromService);
    setProducts(productsFromService)
  }
  
  useEffect(() => {
    getProductsFromService();
  }, []);

  const removeFromDom = () => {
    setProducts(products?.filter(product=>product._id !== deleteId))
  }

  useEffect(() => {
    removeFromDom();
  }, [deleteId]);

  return (
    <div>
      <h2>PRODCUTS</h2>
      {
        products?.map(product=><p key={product._id}><Link to={`/product/${product._id}`}>{product.title}</Link><DeleteButton id={product._id} setDeleteId={setDeleteId}/></p>)
      }
    </div>
  );
}

export default ProductList;
