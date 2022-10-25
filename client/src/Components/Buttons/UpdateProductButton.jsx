import React from 'react';
import { simpleUpdate } from '../../Services/simpleUpdate';
import DeleteButton from './DeleteButton';

const UpdateProductButton = (props) => {

  const {id, product} = props

  const updateProductFromService = () => {
    simpleUpdate(`http://localhost:8000/api/product/edit/${id}`, product)
  }

  return (
    <div>
      <button type='submit' onClick={()=>updateProductFromService()}>UPDATE</button>
    </div>
  );
}

export default UpdateProductButton;
