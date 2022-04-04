import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import AddCommentIcon from "@mui/icons-material/AddComment";
import ArticleIcon from "@mui/icons-material/Article";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Header.css";
import { Avatar } from "@mui/material";
import { useStateValue } from "./StateProvider";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { Navigate } from "react-router-dom";
import { actionTypes } from "./Reducer";
import { Link } from "react-router-dom";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    setAnchorEl(null);

    signOut(auth).then(() => {
      dispatch({
        type: actionTypes.LOGOUT_USER,
      });
      localStorage.clear();
    });
  };

  return (
    <div className="header">
      <div className="header__left">
        {" "}
        <Avatar
          alt="Remy Sharp"
          src={require("./logo2.png")}
          sx={{ width: 80, height: 80 }}
        />
      </div>
      <div className="header__middle">
        <div className="header__option">
          <Link to="/aboutme">
            <PersonIcon fontSize="50" />
          </Link>
        </div>
        <div className="header__option">
          <Link to="/feed">
            <AddCommentIcon fontSize="50" />
          </Link>
        </div>

        <div className="header__option">
          <Link to="/blog">
            <ArticleIcon fontSize="50" />
          </Link>
        </div>
      </div>
      <div className="header__right">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar src={user.photoURL} />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleSignOut}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
