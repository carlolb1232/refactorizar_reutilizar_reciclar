import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DeleteButton from '../Components/Buttons/DeleteButton';
import { simpleGet } from '../Services/SimpleGet';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const getOneProductFromService = async () =>{
    const productFromService = await simpleGet(`http://localhost:8000/api/product/${id}`)
    setProduct(productFromService);
  }

  useEffect(() => {
    getOneProductFromService();
  }, []);

  return (
    <div>
      {
        product&&
        <div>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <button><Link to={`/product/update/${product._id}`}>ACTUALIZAR ?</Link></button>
          <DeleteButton id={product._id}/>
        </div>
      }
    </div>
  );
}

export default ProductDetail;
