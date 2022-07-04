import React from "react";
import Modal from 'react-modal';
import { makeStyles } from '@material-ui/core/styles';

// required to meet accesibility standards
Modal.setAppElement('#root');

const useStyles = makeStyles((theme) => ({
  root:{
    //zIndex: 1400
  }
}));

export default function LoginModal({ isOpen, closeModal }) {
  //console.log(props.isOpen)
  // make zindex greater than that of BottomIcon
  const classes = useStyles();
  return (
      <div>
        <Modal
        
          
          isOpen={isOpen}
        >
          <h2>Login</h2>
          <form>
            <h4>Username</h4>
            <input/>
            <h4>Password</h4>
            <input/>
          </form>
          <p style={{color:"#ff0042"}}>Close login screen here</p>
          <button onClick={closeModal}>close</button>
        </Modal>
      </div>
  )
}