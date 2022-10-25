import React from 'react';
import { useNavigate } from 'react-router-dom';
import { simplePost } from '../../Services/simplePost';

const CreateProductButton = (props) => {

  const {product} = props
  const navigate = useNavigate();

  const postProductFromService = () => {
    console.log("button: ", product)
    simplePost(`http://localhost:8000/api/product/new`, product)
    navigate("/")
  }

  return (
    <div>
      <button type='submit' onClick={()=>postProductFromService()}>CREATE</button>
    </div>
  );
}

export default CreateProductButton;
