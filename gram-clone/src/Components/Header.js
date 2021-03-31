import React, { useState, useEffect } from "react";
import "./Header.css";
import AddPost from "./AddPost";
import PostAddIcon from '@material-ui/icons/PostAdd';
import gramClone from "../Images/gramClone.png";
import gramCloneLogo from "../Images/gramCloneLogo.png";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, Input } from "@material-ui/core";
import { auth } from "../firebase";

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
  const [openSignIn, setOpenSignIn] = useState(false);
  // ^^ modal
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  // ^^ sign in/up form within modal

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has logged in
        console.log(authUser);
        setUser(authUser);
      } else {
        // logged out
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
      // cleanup actions
    };
  }, [user, username]);
  // ^^ persistant due to cookie tracking

  const signUp = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));
  };
  const signIn = (event) => {
    event.preventDefault();
    auth
    .signInWithEmailAndPassword(email, password)
    .catch((error) => alert(error.message))
    setOpenSignIn(false)
  };

  return (
    <div className="header">
      <Modal
        className="header_modal"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="header_signup">
            <center>
              <img src={gramCloneLogo} alt="gram clone logo" />
            </center>
            <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signUp}>
              Sign Up
            </Button>
          </form>
        </div>
      </Modal>
      <Modal
        className="header_modal"
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="header_signup">
            <center>
              <img src={gramCloneLogo} alt="gram clone logo" />
            </center>

            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signIn}>
              Sign In
            </Button>
          </form>
        </div>
      </Modal>
      <PostAddIcon />
      <img className="header_image" src={gramClone} alt="logo" />
      

      
      {user ? (
        <Button onClick={() => auth.signOut()}>Sign Out</Button>
      ) : (
        <div className="header_signin_Container">
          <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
          <Button onClick={() => setOpen(true)}>Sign Up</Button>
        </div>
      )}
    </div>
  );
}

export default Header;
