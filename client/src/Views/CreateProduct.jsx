import React, { useState } from 'react';
import CreateProductButton from '../Components/Buttons/CreateProductButton';
import ProductForm from '../Components/ProductForm';

const CreateProduct = () => {

  const [newProduct, setNewProduct] = useState();


  const initialProduct = {
    title: "",
    price: 0,
    description: ""
  }
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("producto")
    console.log(newProduct)
  }


  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <ProductForm initialProduct={initialProduct} setFormProduct={setNewProduct} formProduct={newProduct}/>
        <CreateProductButton product={newProduct}/>
      </form>
    </div>
  );
}

export default CreateProduct;
