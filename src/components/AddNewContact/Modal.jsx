import React from 'react';
import ReactDOM from "react-dom";

const Backdrop=(props)=>{
    return (
        <div className="backdrop fixed w-full h-screen bg-black/50"  onClick={props.modalCloseHandler}>
          
        </div>
      )
}



const ModalOverlay=(props)=> {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  )
}

const portalElement=document.getElementById("overlays");

export default function Modal(props) {
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop modalCloseHandler={props.modalCloseHandler}/>,portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </div>
  )
}
