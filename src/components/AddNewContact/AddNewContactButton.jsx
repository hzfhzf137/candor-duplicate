import React , {useState} from 'react'
import ModalForm from './ModalForm';

function AddNewContactButton() {
  const [isOpen , setIsOpen]=useState(false);

  const modalOpenHandler=()=>
  {
    setIsOpen(true);
  }
  const modalCloseHandler=()=>
  {
    setIsOpen(false);
  }

  return (
    <React.Fragment >
       <button onClick={modalOpenHandler} className='float-right w-10 h-10 rounded bg-blue-300' >Add</button>
        {isOpen && <ModalForm modalCloseHandler={modalCloseHandler}/>}
        
    </React.Fragment>
  )
}

export default AddNewContactButton;
