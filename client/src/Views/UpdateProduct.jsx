import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DeleteButton from '../Components/Buttons/DeleteButton';
import UpdateProductButton from '../Components/Buttons/UpdateProductButton';
import ProductForm from '../Components/ProductForm';
import { simpleGet } from '../Services/SimpleGet';

const UpdateProduct = () => {

  const { id } = useParams();

  const [product, setProduct] = useState();

  const getProductFromService = async () => {
    const productFromService = await simpleGet(`http://localhost:8000/api/product/${id}`);
    setProduct(productFromService);
  }

  useEffect(() => {
    getProductFromService()
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("producto")
    console.log(product)
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
      {
        product&&
        <ProductForm initialProduct={product} setFormProduct={setProduct} formProduct={product}/>
      }
      {
        product&&
        <UpdateProductButton id={id} product={product}/>
      }
      {
        product&&
        <DeleteButton id={id}/>
      }
      </form>
    </div>
  );
}

export default UpdateProduct;
