import React, { useRef, useState } from "react";
import { Avatar } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {signOut} from '../../../actions/accountAction'
import { useNavigate } from "react-router";

const Account = () => {
  const account = useSelector((state) => state.account.user);
  const isAuthenticated = !!account?.user;
  const [isOpen, setOpen] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSingInOut = () => {
    handleClose();
    //logoff  no app atraves de uma actions (redux)
    dispatch(signOut());
    navigator('/signIn');
  };

  const handleLogar = () => {
    navigator('/signIn');
  }

  return (
    <>
      <Avatar
        ref={ref}
        onClick={handleOpen}
        alt="Henry Sharp"
        src={account && account.user.avatar}
      />

      {isAuthenticated ? (
        <Menu
          anchorEl={ref.current}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={isOpen}
          onClose={handleClose}
          getContentAnchorEl={null}
        >
          <MenuItem>Perfil</MenuItem>
          <MenuItem>Meus Favoritos</MenuItem>
          <MenuItem>Meus Posts</MenuItem>
          <MenuItem>Minhas Conexões</MenuItem>
          <MenuItem onClick={handleSingInOut}>Sair</MenuItem>
        </Menu>
      ) : (
        <Menu
          anchorEl={ref.current}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={isOpen}
          onClose={handleClose}
          getContentAnchorEl={null}
        >
          <MenuItem>Registrar</MenuItem>
          <MenuItem onClick={handleLogar}>Entrar</MenuItem>
        </Menu>
      )}
    </>
  );
};

export default Account;
