import React, { useState }from 'react';
import "./Header.css";
import gramClone from "../Images/gramClone.png";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from '@material-ui/core/Button';

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Header() {
    const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const signUp = (event) => {

  }



    return (
        <div className="header">
             <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <h2>Sign in modal </h2>
        </div>
      </Modal>
             <img className="header_image" 
             src={gramClone} alt="logo" />

             <Button onClick={() => setOpen(true)}>Sign Up</Button>
        </div>
    )
}

export default Header
