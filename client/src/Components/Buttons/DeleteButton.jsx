import React from 'react';
import { useNavigate } from 'react-router-dom';
import { simpleDelete } from '../../Services/simpleDelete';

const DeleteButton = (props) => {

  const { id, setDeleteId } = props;
  const navigate = useNavigate();

  const deleteProductFronService = () => {
    // console.log(" EL ELEMENTO QUE BORRARA SERA EL " + id)
    simpleDelete(`http://localhost:8000/api/product/delete/${id}`);
    
    setDeleteId&&  setDeleteId(id)
    navigate("/");
  }

  return (
    <div>
      <button onClick={()=>deleteProductFronService()}>DELETE</button>
    </div>
  );
}

export default DeleteButton;
