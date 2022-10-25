import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CreateProductButton from './Buttons/CreateProductButton';

const ProductForm = (props) => {

  const { initialProduct, setFormProduct, formProduct  } = props

  const [product, setProduct] = useState(initialProduct);
  
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    })
    setFormProduct({
      ...formProduct,
      [name]: value
    })
  }
  useEffect(() => {
    console.log(product)
    console.log("producto form", formProduct)
  }, [product, formProduct]);


  return (
    <>
      <div className="form-group">
        <label>Title: </label>
        <input 
          type="text" 
          name="title"
          value={product.title}
          onChange={onChangeHandler}
        />
      </div>
      <div className="form-group">
        <label>Price: </label>
        <input 
          type="number" 
          name="price"
          value={product.price}
          onChange={onChangeHandler}
        />
      </div>
      <div className="form-group">
        <label>Description: </label>
        <input 
          type="text" 
          name="description"
          value={product.description}
          onChange={onChangeHandler}
        />
      </div>
    </>
  );
}

export default ProductForm;
